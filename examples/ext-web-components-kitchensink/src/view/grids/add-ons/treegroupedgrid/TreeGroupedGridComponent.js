import './TreeGroupedGridComponent.html';
import '../../data/SalesData';

Ext.require([
    'Ext.grid.filters.*',
    'Ext.grid.plugin.SummaryRow',
    'Ext.data.summary.Average',
    'Ext.data.summary.Sum',
    'Ext.grid.plugin.Summaries',
    'Ext.grid.plugin.GroupingPanel'
]);

export default class TreeGroupedGridComponent {
    constructor() {
        this.store=Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: [
                { name: 'id', type: 'int' },
                { name: 'company', type: 'string' },
                { name: 'country', type: 'string' },
                { name: 'person', type: 'string' },
                { name: 'date', type: 'date', dateFormat: 'c' },
                { name: 'value', type: 'float', allowNull: true },
                { name: 'quantity', type: 'float', allowNull: true }
            ],
            pageSize:500,
            groupers: [
                {
                    property: 'date',
                    // you can provide a formatter that is used to create groups
                    formatter: 'date("Y")',
                },
                'person',
                'company'
            ],
            proxy: {
                type: 'ajax',
                url: '/KitchenSink/Sales'
            }
        });
    }

    gridColumns = [{
        text: 'Company',
        dataIndex: 'company',
        groupable: true,
        hidden:true,
        width:100,
        filterType: 'string'
    },
    {
        text: 'Country',
        dataIndex: 'country',
        groupable: true,
        flex: 1,
        filterType: 'list'
    },
    {
        text: 'Person',
        dataIndex: 'person',
        groupable: true,
        hidden:true,
        summary: 'count'
    },
    {
        text: 'Date',
        dataIndex: 'date',
        hidden:true,
        xtype: 'datecolumn',
        filterType: 'date'
    },
    {
        text: 'Value',
        dataIndex: 'value',
        xtype: 'numbercolumn',
        align: 'right',
        filterType: 'number',
        summary: 'average'
    },
    {
        text: 'Quantity',
        dataIndex: 'quantity',
        xtype: 'numbercolumn',
        align: 'right',
        summary: 'sum'
    }]

    onGridReady = (event) => {
        this.gridCmp = event.detail.cmp;
        this.gridCmp.setColumns(this.gridColumns);
        this.gridCmp.setStore(this.store);
        this.gridCmp.addPlugin({
            type: 'gridsummaries'
        });

        Ext.getCmp('groupSumMenu').getMenu().on('click', this.setGroupSummaryPosition.bind(this));
        Ext.getCmp('sumMenu').getMenu().on('click', this.setSummaryPosition.bind(this));
        Ext.getCmp('visibilityMenu').getMenu().on('click', this.onVisibilityClick.bind(this));
    }  

    setGroupSummaryPosition = (menu, menuItem) => {
        this.gridCmp.setGroupSummaryPosition(menuItem.sum);
    }

    setSummaryPosition = (menu, menuItem) => {
        this.gridCmp.setSummaryPosition(menuItem.sum);
    }

    onVisibilityClick = (menu, menuItem) => {
        this.gridCmp[menuItem.id === 'expandBtn' ? 'expandAll' : 'collapseAll']();
    }
}
