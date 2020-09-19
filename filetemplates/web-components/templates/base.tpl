import WebComponentsBaseComponent from '../common/webcomponentsbase.js'

export default class {classname} extends WebComponentsBaseComponent {

    static PROPERTIES() { return [
        'badgeText',
        'group',
        'value',
        'createExtComponentDefer',
        'createExtComponent',
        'closable',
        'title',
        'header',
        'renderer',
        'label',
        'fitToParent',
        'tab',
        'config',
        'platformConfig',
        'summaryRenderer',
        'extname',
        'viewport',
        'align',
        'plugins',
        'responsiveConfig',
        'responsiveFormulas',
        {sPROPERTIES}]};
    static EVENTS() { return [{sEVENTS}]};
    static getProperties(properties) {
        return properties.concat({classname}.PROPERTIES)
    }
    static getEvents(events) {
        return events.concat({classname}.EVENTS)
    }

    static get observedAttributes() {
        var attrs = []
        //for (var property in {classname}.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        //{classname}.EVENTS().forEach(function (eventparameter, index, array) {
        //    attrs.push('on' + eventparameter.name)
        //})

        {classname}.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        {classname}.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat({classname}.PROPERTIES()),
            events.concat({classname}.EVENTS())
        )
    }
}