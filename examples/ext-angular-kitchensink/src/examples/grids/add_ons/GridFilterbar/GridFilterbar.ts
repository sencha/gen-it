declare var Ext: any;
import { Component } from "@angular/core";
import { model } from "./GridFilterbarGridModel";
import { GridFilterbarService } from "./GridFilterbar.service";

Ext.require(["Ext.grid.plugin.filterbar.FilterBar"]);

@Component({
  selector: "filterbar-component",
  templateUrl: "./GridFilterbar.html",
  styles: [``],
})

export class GridFilterbarComponent {
  grid: any;
  showVisibilityMenu: boolean =  false;
  showReconfigureMenu: boolean = false;

  gridReady = (event) => {
    this.grid = event.cmp;
    this.setupStoreListeners(this.grid.getStore());
  };
  

  constructor(gridfilterbarService: GridFilterbarService) { }

  showFilterBar = (btn: any) => {
    this.grid.showFilterBar();
    this.onCancelVisibility();
  };

  hideFilterBar(btn: any)  {
    this.grid.hideFilterBar();
    this.onCancelVisibility();
  };

  setupStoreListeners = (store: any) => {
    store.on( "filterchange", function (store, filters) {
        this.grid
          .getTitleBar()
          .down("button[reference=clearFilterButton]")
          .setDisabled(filters.length == 0);
      },this);
  };

  configureMenuReady(menu):void {
    menu.sender.grid = this.grid;
    menu.sender.down('button[reference=sales]').grid = this.salesGridConfig;
    menu.sender.down('button[reference=employee]').grid = this.employeesGridConfig;
  }

  doReconfigure(menu:any) :void {
    menu = Ext.os.is.Desktop ? menu : menu.sender;
    var config = menu.grid,
      grid = this.grid,
      store = grid.getStore();

    grid.setStore(config.store);
    grid.setColumns(config.columns);

    grid.getTitleBar().down("button[reference=clearFilterButton]").enable();
    this.onCancelReconfigureMenu();
  };

  concatNames = (v, rec, cell) => {
    return rec.get("forename") + " " + rec.get("surname");
  };

  renderMailto = (v) => {
    return '<a href="mailto:' + v + '">' + Ext.htmlEncode(v) + "</a>";
  };

  clearFilters = (btn: any) => {
    var grid = btn.up("grid");
    var filters = grid.getStore().getFilters(false);

    if (filters) filters.removeAll();
  };

  onVisibilityClick= (btn:any) => {
    this.showVisibilityMenu = true;
  };

  onCancelVisibility= () => {
    this.showVisibilityMenu = false;
  };

  onCancelReconfigureMenu = () => {
    this.showReconfigureMenu = false;
  };

  onReconfigureMenuClick = (btn:any) => {
    this.showReconfigureMenu = true;
  };

  regions = {
    Belgium: "Europe",
    Netherlands: "Europe",
    "United Kingdom": "Europe",
    Canada: "North America",
    "United States": "North America",
    Australia: "Australia",
  };

  //Sales Data
  getData = function () {
    var data = [],
      items = 73,
      rand = 37,
      companies = ["Google", "Apple", "Dell", "Microsoft", "Adobe"],
      countries = ["Belgium", "Netherlands", "United Kingdom", "Canada", "United States", "Australia"],
      persons = ["John", "Michael", "Mary", "Anne", "Robert"],
      randomItem = function (data) {
        var k = rand % data.length;

        rand = rand * 1664525 + 1013904223;
        rand &= 0x7fffffff;

        return data[k];
      },
      randomDate = function (start, end) {
        return Ext.Date.clearTime(
          new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
        );
      },
      i;

    for (i = 0; i < items; i++) {
      data.push({
        id: i,
        company: randomItem(companies),
        country: randomItem(countries),
        person: randomItem(persons),
        date: randomDate(new Date(2012, 0, 1), new Date()),
        value: Ext.Number.toFixed(Math.random() * 1000 + 1, 2),
        quantity: Math.floor(Math.random() * 30 + 1),
      });
    }
    return data;
  };

  //Sales store
  store = Ext.create("Ext.data.Store", {
    autoLoad: true,
    fields: [
      { name: "id", type: "int" },
      { name: "company", type: "string" },
      { name: "country", type: "string" },
      { name: "person", type: "string" },
      { name: "date", type: "date", dateFormat: "c" },
      { name: "value", type: "float", allowNull: true },
      { name: "quantity", type: "float", allowNull: true },
    ],
    filters: [
      {
        property: "country",
        operator: "==",
        value: "Belgium",
      },
    ],
    data: this.getData(),
  });

  salesGridConfig = {
    store: this.store,
    columns: [
      { text: "Company", dataIndex: "company", flex: 1, filterType: "string", groupable:true },
      { text: "Country", dataIndex: "country", flex: 1, filterType: "list", groupable:true },
      { text: "Person", dataIndex: "person",  groupable:true },
      { text: "Date", dataIndex: "date", xtype: "datecolumn", format: "d.m.Y", filterType: "date" },
      { text: "Value", dataIndex: "value", xtype: "numbercolumn", align: "right", filterType: "number" },
      { text: "Quantity", dataIndex: "quantity", xtype: "numbercolumn", align: "right" }
    ]
  };

  employeesGridConfig = {
    store: {
      model,
      autoLoad: true,
      pageSize: 0,
      proxy: {
        type: "ajax",
        url: "/KitchenSink/BigData",
      },
      listeners: {
        scope: this,
        filterchange: function (store, filters) {
          this.grid
            .getTitleBar()
            .down("button[reference=clearFilterButton]")
            .setDisabled(filters.length == 0);
        },
      },
    },
    columns: [
      { text: "Name", dataIndex: "fullName", renderer: this.concatNames, groupable: true, flex: 1, 
        filterType: { type: "string", value: "danni" },
      },
      { text: "Date of birth", dataIndex: "dob", xtype: "datecolumn", filterType: "date" },
      { text: "Join date", dataIndex: "joinDate", xtype: "datecolumn", filterType: "date" },
      { text: "Notice<br>period", dataIndex: "noticePeriod", groupable: true, filterType: "list" },
      { text: "Email address", dataIndex: "email", flex: 1, renderer: this.renderMailto, 
        cell: { encodeHtml: false },
        filterType: "string",
      },
      { text: "Department", dataIndex: "department", filterType: "list" },
      { text: "Salary", dataIndex: "salary", xtype: "numbercolumn", align: "right", 
        filterType: { type: "number", operator: ">=" }
      }
    ]
  }

  gridTitleBar = {
    shadow: false,
    items: [
      {
        xtype: "button",
        align: "right",
        text: "Visibility",
        menu: Ext.os.is.Desktop && [
          {
            text: "Show",
            listeners: { click : this.showFilterBar, scope:this}
          },
          {
            text: "Hide",
            listeners: { click : this.hideFilterBar, scope:this}
          },
        ],
        handler: !Ext.os.is.Desktop && this.onVisibilityClick
      },
      {
        xtype: "button",
        align: "right",
        text: "Reconfigure",
        menu:  Ext.os.is.Desktop && [
          {
            text: "Sales data",
            listeners:{click: this.doReconfigure, scope:this },
            grid: this.salesGridConfig
          },
          {
            text: "Employees data",
            listeners:{click: this.doReconfigure, scope:this },
            grid: this.employeesGridConfig
          }
        ],
        handler: !Ext.os.is.Desktop && this.onReconfigureMenuClick
      },
      {
        xtype: "button",
        align: "right",
        reference: "clearFilterButton",
        text: "Clear filters",
        handler: this.clearFilters,
      }
    ]
  };
}
