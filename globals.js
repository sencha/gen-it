exports.setGlobals =() => {
  console.log('These are set in globals.js...\n')

  global["createFolders"]        = true;
  global["launch"]               = true;
  global["postLaunch"]           = true;
  global["copy"]                 = false;

  global["doWebComponents"]      = false;
  global["doAngular"]            = false;
  global["doReact"]              = false;
  global["doDoc"]                = false;

  global["products"] = process.argv[4]
  var products = global["products"].split("-");
  //console.log(products)
  if (products.includes("extwebcomponents")) {
    global["doWebComponents"] = true;
  }
  if (products.includes("extangular")) {
    global["doAngular"] = true;
  }
  if (products.includes("extreact")) {
    global["doReact"] = true;
  }

  //console.log(global["doWebComponents"])
  //console.log(global["doAngular"])
  //console.log(global["doReact"])

  global["npmInstall"]           = true;
  global["npmPublishRightAfter"] = false;


  console.log('PRODUCTS:')
  console.log(`doWebComponents:\t${doWebComponents}`)
  console.log(`doAngular:\t\t${doAngular}`)
  console.log(`doReact:\t\t${doReact}`)
  console.log(`doDoc:\t\t\t${doDoc}`)
  console.log(`\n`)
  console.log('STEPS:')
  //console.log(`createFolders:\t\t${createFolders}`)
  //console.log(`launch:\t\t\t${launch}`)
  //console.log(`postLaunch:\t\t${postLaunch}`)
  console.log(`npmInstall:\t\t${npmInstall}`)
  console.log(`npmPublishRightAfter:\t${npmPublishRightAfter}`)
  //console.log(`copy:\t\t\t${copy}`)
  console.log(`\n`)

  global['ExtVersion'] = '7.4.0'
  global['AllClassesFolder'] = './'
  global["generatedFolders"] = "./GeneratedFolders/";

  global["suffixArgv"] = process.argv[2]
  global["toolkitArgv"] = process.argv[3]

  global["ext-tree"] = []
  global["xtype-tree"] = []
  global["xtypes"] = []
  global["reactnames"] = []

  global["toolkit"] = `${toolkitArgv}`;
  var toolkits = ['modern', 'classic'];
  if (toolkits.includes(toolkit) == false) {
    log('toolkit not valid')
    return
  }

  global["suffix"] = `${suffixArgv}`;
  var suffixes = ['blank', 'grid'];
  if (suffixes.includes(suffix) == false) {
    log('suffix not valid')
    return
  }

  const genItUtils = require("./genItUtils");
  global["run"] = genItUtils.run;
  global["writeTemplateFile"] = genItUtils.writeTemplateFile;
  global["doProperties"] = genItUtils.doProperties;
  global["doMethods"] = genItUtils.doMethods;
  global["doEvents"] = genItUtils.doEvents;

  global["copyFileSync"] = require('fs-copy-file-sync');
  global["fs"] = require("fs-extra");

  global["rimraf"] = require("rimraf");
  global["mkdirp"] = require("mkdirp");
  require("./XTemplate");

  global["all"] = [];
  global["info"] = {};
  info.now = new Date().toString();
  info.toolkit = toolkit;
  info.Toolkit = info.toolkit.charAt(0).toUpperCase() + info.toolkit.slice(1);
  info.suffixParm = suffix;

  global["typeFolder"] = generatedFolders + info.suffixParm + '/';

  if (info.suffixParm == 'material-ui') {
    info.toolkitshown = ``;
  }
  else {
    info.toolkitshown = `-${info.toolkit}`;
  }
  info.version = ExtVersion;
  info.framework = 'elements';

  if (info.suffixParm == 'blank' ||
      info.suffixParm == 'test'
  ) {
    info.bundle = ''
    info.Bundle = ''
    info.name = ''
  }
  else {
    info.bundle = '-' + info.suffixParm
    info.Bundle = info.suffixParm.charAt(0).toUpperCase() + info.suffixParm.slice(1);
    info.name = info.bundle.substring(1)
  }

  info.data = require(`${AllClassesFolder}/AllClassesFiles/docs/${info.toolkit}/${info.toolkit}-all-classes-flatten.json`);
  info.wantedxtypes = require(`./npmpackage/${toolkit}/${info.suffixParm}`).getXtypes();

  global["moduleVars"] = { imports: "", declarations: "", exports: "" };

  info.webComponentsImports = []
  info.webComponentsImportsPlain = []
  info.reactImportsArray = []
  info.reactImportsArrayPlain = []
  info.angularImports = []
  info.allExtended = '';
  info.imports = ''
  info.declarations = ''
  info.elements = ''
  info.manifest = ''

  for (var i = 0; i < info.wantedxtypes.length; i++) {
      var w = info.wantedxtypes[i]
      var W = w.charAt(0).toUpperCase() + w.slice(1);
      info.manifest = info.manifest + `{"xtype":"${w}"},\n`
      info.elements = info.elements + `&lt;ext-${w}&gt;&lt;/\ext-${w}&gt;\n\n`
      info.declarations = info.declarations + `    Ext${W}Component,\n`
      //info.importsxng = info.imports + `import {Ext${W}Component} from\n  '@sencha/ext-angular-${info.xztype}/esm5/src/ext-${w}.component';\n`
      //info.importsewc = info.imports + `import '@sencha/ext-web-components-${info.xztype}/lib/ext-${w}.component';\n`
  }

  if(doAngular == true) {
    info.angular = {}
    info.angular.module = ''
    info.angular.component = ''
  }

  if(doReact == true) {
    info.reactImports = ''
    info.reactExports = ''
    info.reactExports70 = ''
    info.reactExportsCase = ''
  }

  var docs = []
  if (info.toolkit == 'modern' && info.suffixParm != 'material-ui') {
    info.reactExportsCase = `
  export const ActionSheet = ExtActionsheet_;
  export const BreadcrumbBar = ExtBreadcrumbbar_;

  export const Calendar_Event = ExtCalendar_event_;
  export const Calendar_Form_Add = ExtCalendar_form_add_;
  export const Calendar_Calendar_Picker = ExtCalendar_calendar_picker_;
  export const Calendar_Form_Edit = ExtCalendar_form_edit_;
  export const Calendar_Timefield = ExtCalendar_timefield_;
  export const Calendar_Daysheader = ExtCalendar_daysheader_;
  export const Calendar_Weeksheader = ExtCalendar_weeksheader_;
  export const Calendar_List = ExtCalendar_list_;
  export const Calendar_Day = ExtCalendar_day_;
  export const Calendar_Days = ExtCalendar_days_;
  export const Calendar_Month = ExtCalendar_month_;
  export const Calendar_Week = ExtCalendar_week_;
  export const Calendar_Weeks = ExtCalendar_weeks_;
  export const Calendar_Dayview = ExtCalendar_dayview_;
  export const Calendar_Daysview = ExtCalendar_daysview_;
  export const Calendar_Monthview = ExtCalendar_monthview_;
  export const Calendar_Multiview = ExtCalendar_multiview_;
  export const Calendar_Weekview = ExtCalendar_weekview_;
  export const Calendar_Weeksview = ExtCalendar_weeksview_;


  export const CheckBoxField = ExtCheckboxfield_;
  export const CheckboxGroup = ExtCheckboxgroup_;
  export const CheckColumn = ExtCheckcolumn_;
  export const ComboBoxField = ExtComboboxfield_;
  export const ContainerField = ExtContainerfield_;
  export const DataView = ExtDataview_;
  export const DateColumn = ExtDatecolumn_;
  export const DatePanel = ExtDatepanel_;
  export const DatePickerField = ExtDatepickerfield_;
  export const EmailField = ExtEmailfield_;
  export const FieldSet = ExtFieldset_;
  export const FileField = ExtFilefield_;
  export const FormPanel = ExtFormpanel_;
  export const FroalaEditorField = ExtFroalaeditorfield_;
  export const LockedGrid = ExtLockedgrid_;
  export const MenuCheckItem = ExtMenucheckitem_;
  export const MenuItem = ExtMenuitem_;
  export const NestedList = ExtNestedlist_;
  export const NumberColumn = ExtNumbercolumn_;
  export const NumberField = ExtNumberfield_;
  export const PasswordField = ExtPasswordfield_;
  export const PivotGrid = ExtPivotgrid_;
  export const RadioField = ExtRadiofield_;
  export const SearchField = ExtSearchfield_;
  export const SegmentedButton = ExtSegmentedbutton_;
  export const SelectField = ExtSelectfield_;
  export const SliderField = ExtSliderfield_;
  export const SparkLineLine = ExtSparklineline_;
  export const SpinnerField = ExtSpinnerfield_;
  export const SplitButton = ExtSplitbutton_;
  export const TabBar = ExtTabbar_;
  export const TabPanel = ExtTabpanel_;
  export const TextAreaField = ExtTextareafield_;
  export const TextColumn = ExtTextcolumn_;
  export const TreeColumn = ExtTreecolumn_;
  export const TextField = ExtTextfield_;
  export const TimeField = ExtTimefield_;
  export const TimePanel = ExtTimepanel_;
  export const TitleBar = ExtTitlebar_;
  export const ToggleField = ExtTogglefield_;
  export const ToolBar = ExtToolbar_;
  export const ToolTip = ExtTooltip_;
  export const TreeList = ExtTreelist_;
  export const UrlField = ExtUrlfield_;
  export const WidgetCell = ExtWidgetcell_;
  export const URLField = ExtUrlfield_;

  export var ExtD3Canvas = ExtD3_canvas_;
  export var ExtD3HeatMap = ExtD3_heatmap_;
  export var ExtD3Pack = ExtD3_pack_;
  export var ExtD3Partition = ExtD3_partition_;
  export var ExtD3Sunburst = ExtD3_sunburst_;
  export var ExtD3Tree = ExtD3_tree_;
  export var ExtD3HorizontalTree = ExtD3_horizontal_tree_;
  export var ExtD3TreeMap = ExtD3_treemap_;
  export var ExtD3Svg = ExtD3_svg_;
  export var ExtPivotD3Container = ExtPivotd3container_;
  export var ExtPivotHeatMap = ExtPivotheatmap_;

  export const ExtCalendarEvent = ExtCalendar_event_;
  export const ExtCalendarFormAdd = ExtCalendar_form_add_;
  export const ExtCalendarCalendarPicker = ExtCalendar_calendar_picker_;
  export const ExtCalendarFormEdit = ExtCalendar_form_edit_;
  export const ExtCalendarTimeField = ExtCalendar_timefield_;
  export const ExtCalendarDaysHeader = ExtCalendar_daysheader_;
  export const ExtCalendarWeeksHeader = ExtCalendar_weeksheader_;
  export const ExtCalendarList = ExtCalendar_list_;
  export const ExtCalendarDay = ExtCalendar_day_;
  export const ExtCalendarDays = ExtCalendar_days_;
  export const ExtCalendarMonth = ExtCalendar_month_;
  export const ExtCalendarWeek = ExtCalendar_week_;
  export const ExtCalendarWeeks = ExtCalendar_weeks_;
  export const ExtCalendarDayView = ExtCalendar_dayview_;
  export const ExtCalendarDaysView = ExtCalendar_daysview_;
  export const ExtCalendarMonthView = ExtCalendar_monthview_;
  export const ExtCalendarMultiView = ExtCalendar_multiview_;
  export const ExtCalendarWeekView = ExtCalendar_weekview_;
  export const ExtCalendarWeeksView = ExtCalendar_weeksview_;

  //export { launch } from "./dist/launch";
    `
  }

  global["webComponentsTemplateFolder"] = `./filetemplates/web-components/`;
  global["angularTemplateFolder"] = `./filetemplates/angular/`;
  global["reactTemplateFolder"] = `./filetemplates/react/`;

  global["webComponentsPackageFolder"];
  webComponentsPackageFolder = `${typeFolder}ext-web-components${info.toolkitshown}${info.bundle}/`;

  global["angularPackageFolder"];
  angularPackageFolder = `${typeFolder}ext-angular${info.toolkitshown}${info.bundle}/`;

  global["reactPackageFolder"];
  reactPackageFolder = `${typeFolder}ext-react${info.toolkitshown}${info.bundle}/`;

  global["docPackageFolder"];
  docPackageFolder = `${typeFolder}doc${info.toolkitshown}${info.bundle}/`;

  global["docFolder"];
  global["docStagingFolder"];

}