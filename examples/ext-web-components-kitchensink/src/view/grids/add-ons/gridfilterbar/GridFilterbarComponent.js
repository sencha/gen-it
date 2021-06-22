import './GridFilterbarComponent.html';
import model from '../../data/CompanyModel';
import '../../data/BigData';
import '../../data/SalesData';

Ext.require(['Ext.grid.plugin.filterbar.FilterBar']);

export default class GridFilterbarComponent {
    salesStore = Ext.create('Ext.data.Store', {
        model,
        autoLoad: true,
        pageSize: 0,
        proxy: {
            type: 'ajax',
            url: '/KitchenSink/Sales',
        },
        filters: [{
            property: 'country',
            operator: '==',
            value: 'Belgium'
        }],
        listeners: {
            scope: this,
            filterchange: function(store, filters) {
                this.clearButton && this.clearButton.setDisabled(filters.length== 0);
            },
        }
    });

    salesGridConfig = {
        store: this.salesStore,
        columns: [
            { text: 'Company', dataIndex: 'company', flex: 1, filterType: 'string', groupable:true },
            { text: 'Country', dataIndex: 'country', flex: 1, filterType: {type :'list', value:'Belgium'}, groupable:true },
            { text: 'Person', dataIndex: 'person', groupable:true },
            { text: 'Date', dataIndex: 'date', formatter:'date("m/d/Y")', filterType: 'date' },
            { text: 'Value', dataIndex: 'value', xtype: 'numbercolumn', align: 'right', filterType: 'number' },
            { text: 'Quantity', dataIndex: 'quantity', xtype: 'numbercolumn', align: 'right' }
        ]
    };
    
    employeesGridConfig = {
        store: {
            autoLoad: true,
            pageSize: 0,
            proxy: {
                type: 'ajax',
                url: '/KitchenSink/BigData',
            },
            listeners: {
                scope: this,
                filterchange: function(store, filters) {
                    this.clearButton.setDisabled(filters.length== 0);
                }
            }
        },
        columns: [
            { text: 'Name', dataIndex: 'fullName', renderer: this.concatNames, groupable: true, flex: 1, 
                filterType: { type: 'string', value: 'danni' },
            },
            { text: 'Date of birth', dataIndex: 'dob', formatter:'date("m/d/Y")', filterType: 'date' },
            { text: 'Join date', dataIndex: 'joinDate', renderer : function(val){
                if(val)
                    return val.slice(4, 6)+'/'+val.slice(6, 8) +'/'+ val.slice(0, 4);
            }, filterType: 'date' },
            { text: 'Notice<br>period', dataIndex: 'noticePeriod', groupable: true, filterType: 'list' },
            { text: 'Email address', dataIndex: 'email', flex: 1, renderer: function(v){
                return '<a href="mailto:' + v + '">' + Ext.htmlEncode(v) + '</a>';
            }, 
            cell: { encodeHtml: false },
            filterType: 'string',
            },
            { text: 'Department', dataIndex: 'department', filterType: 'list' },
            { text: 'Salary', dataIndex: 'salary', xtype: 'numbercolumn', align: 'right', 
                filterType: { type: 'number', operator: '>=' }
            }
        ]
    };

    concatNames = (v, rec) => {
        return rec.get('forename') + ' ' + rec.get('surname');
    };

    renderMailto = (v) => {
        return '<a href="mailto:' + v + '">' + Ext.htmlEncode(v) + '</a>';
    };

    gridReady = (event) => {
        
        this.gridCmp = event.detail.cmp;
        this.gridCmp.setStore(this.salesStore);
        this.gridCmp.addPlugin({
            type: 'gridfilterbar',
        });

        this.clearButton = Ext.getCmp('clearFilterBtn');
        this.clearButton.on('tap', function(btn) {
            this.clearFilters(btn);
        }, this);
        
        Ext.getCmp('visibilityMenu').getMenu().on('click', this.changeVisibility.bind(this));
        Ext.getCmp('reconfigureMenu').getMenu().on('click', this.onReconfigureGrid.bind(this));
    };

    clearFilters = () => {
        var filters = this.gridCmp.getStore().getFilters(false);
        if (filters) filters.removeAll();
    };

    changeVisibility =(menu, menuItem) => {
        this.gridCmp[menuItem.id=='showBtn' ? 'showFilterBar' : 'hideFilterBar']();
    };

    onReconfigureGrid = (menu, menuItem) => {
        menu = Ext.os.is.Desktop ? menu : menu.sender;
        var gridConfig = menuItem.id=== 'salesDataBtn' ? this.salesGridConfig : this.employeesGridConfig,
            grid = this.gridCmp;

        grid.setStore(gridConfig.store);
        grid.setColumns(gridConfig.columns);

        this.clearButton.setDisabled(false);
    }
}
