import React, {Component} from 'react';
import {Grid, Column} from '@sencha/ext-react-modern';

export default class GridFilterBarExample extends Component {

  fields = [
    {name: 'id', type: 'int'},
    {name: 'company', type: 'string'},
    {name: 'country', type: 'string'},
    {name: 'person', type: 'string'},
    {
      name: 'date', type: 'date', dateFormat: 'c', convert: function (date) {
        return date ? Ext.Date.format(new Date(date), 'm-d-Y') : ''
      }
    },
    {name: 'value', type: 'float', allowNull: true},
    {name: 'quantity', type: 'float', allowNull: true},
    {
      name: 'year',
      calculate: function (data) {
        return parseInt(Ext.Date.format(data.date, "Y"), 10);
      }
    }, {
      name: 'month',
      calculate: function (data) {
        return parseInt(Ext.Date.format(data.date, "m"), 10) - 1;
      }
    }, {
      name: 'continent'
    }
  ]

  store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    filters: [{
      property: 'country',
      operator: '==',
      value: 'Belgium'
    }],
    fields: this.fields,
    proxy: {
      type: 'ajax',
      url: 'resources/data/SalesData.json'
    }
  })

  salesGridConfig = {
    store: {
      autoLoad: true,
      filters: [{
        property: 'country',
        operator: '==',
        value: 'Belgium'
      }],
      fields: this.fields,
      proxy: {
        type: 'ajax',
        url: 'resources/data/SalesData.json'
      }
    },
    columns: [
      {text: 'Company', dataIndex: 'company', editor: 'textfield', width: 150, groupable: true, filterType: 'string'},
      {text: 'Country', dataIndex: 'country', editor: 'textfield', width: 150, groupable: true, filterType: 'list'},
      {text: 'Person', dataIndex: 'person', editor: 'textfield', groupable: true},
      {text: 'Date', dataIndex: 'date', xtype: 'datecolumn', format: 'd.m.Y', filterType: 'date'},
      {text: 'Value', dataIndex: 'value', xtype: 'numbercolumn', editor: 'numberfield', align: 'right', filterType: 'number'},
      {text: 'Quantity', dataIndex: 'quantity', xtype: 'numbercolumn', editor: 'numberfield', align: 'right'}
    ]
  }

  employeesGridConfig = {
    store: {
      autoLoad: true,
      pageSize: 0,
      proxy: {
        type: 'ajax',
        url: '/KitchenSink/BigData'
      }
    },
    columns: [
      {text: 'Name', dataIndex: 'fullName', renderer: this.concatNames, groupable: true, width: 200, filterType: {type: 'string', value: 'danni'}},
      {text: 'Date of birth', dataIndex: 'dob', xtype: 'datecolumn', format: 'm-d-Y', filterType: 'date'},
      {text: 'Join date', dataIndex: 'joinDate', xtype: 'datecolumn', filterType: 'date'},
      {text: 'Notice<br>period', dataIndex: 'noticePeriod', groupable: true, filterType: 'list'},
      {text: 'Email address', dataIndex: 'email', renderer: this.renderMailto, cell: {encodeHtml: false}, filterType: 'string'},
      {text: 'Department', dataIndex: 'department', filterType: 'list'},
      {text: 'Salary', dataIndex: 'salary', xtype: 'numbercolumn', align: 'right', filterType: {type: 'number', operator: '>='}}
    ]
  }

  onGridStoreReady = function (grid) {
    this.setupStoreListeners(this.store, grid);
  }

  setupStoreListeners = function (store, grid) {
    Ext.destroy(this.storeListeners);
    this.storeListeners = store.on({
      filterchange: this.onFilterChanged.bind(grid)
    });
  }

  doReconfigure = function (menu) {
    var config = menu.grid,
      grid = menu.up('grid'),
      store, filters;

    // we set the store first because columns may bring additional filters on the store
    grid.setStore(config.store);
    grid.setColumns(config.columns);

    store = grid.getStore();

    this.setupStoreListeners(store, grid);
    filters = store.getFilters(false);
    grid.getViewModel().set('filtered', filters && filters.length > 0);
  }

  concatNames = function (v, rec, cell) {
    return rec.get('forename') + ' ' + rec.get('surname');
  }

  renderMailto = function (v) {
    return '<a href="mailto:' + v + '">' +
      Ext.htmlEncode(v) + '</a>';
  }

  showFilterBar = function () {
    this.up('grid').showFilterBar();
  }

  hideFilterBar = function () {
    this.up('grid').hideFilterBar();
  }

  onFilterChanged = function (store, filters) {
    this.getViewModel().set('filtered', filters.length > 0);
  }

  clearFilters = function () {
    var filters = this.up('grid').getStore().getFilters(false);

    if (filters) {
      filters.removeAll();
    }
  }

  onVisibilityClick = () => {
    this.setState({showVisibilityMenu: true})
  }

  onReconfigureMenuClick = () => {
    this.setState({showReconfigureMenu: false})
  }

  render() {
    return (
      <Grid title="Grid FilterBar"
        store={this.store}
        columnLines
        grouped
        shadow
        viewModel={true}
        listeners={{
          painted: this.onGridStoreReady.bind(this)
        }}

        titleBar={{
          shadow: false,
          items: [
            {
              xtype: "button",
              align: "right",
              text: "Visibility",
              menu: Ext.os.is.Desktop && [
                {
                  text: "Show",
                  handler: this.showFilterBar,
                },
                {
                  text: "Hide",
                  handler: this.hideFilterBar,
                },
              ],
              handler: !Ext.os.is.Desktop && this.onVisibilityClick //handler: !Ext.os.is.Desktop && this.onExportClick
            },
            {
              xtype: "button",
              align: "right",
              text: "Reconfigure",
              menu: Ext.os.is.Desktop && [
                {
                  text: "Sales data",
                  handler: this.doReconfigure.bind(this),
                  grid: this.salesGridConfig
                },
                {
                  text: "Employees data",
                  handler: this.doReconfigure.bind(this),
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
              bind: {
                disabled: '{!filtered}'
              }
            }
          ]
        }}

        platformConfig={{
          desktop: {
            plugins: {
              gridfilterbar: true
            }
          },
          '!desktop': {
            plugins: {
              gridfilterbar: true
            }
          }
        }}
      >
        <Column
          text='Company'
          dataIndex='company'
          flex={1}
          groupable={true}
          filterType='string'
        />
        <Column
          text='Country'
          dataIndex='country'
          flex={1}
          groupable={true}
          filterType='list'
        />
        <Column
          text='Person'
          dataIndex='person'
          groupable={true}
        />
        <Column
          text='Date'
          dataIndex='date'
          flex={1}
          format='m-d-Y'
          xtype='datecolumn'
          filterType='date'
        />
        <Column
          text='Value'
          dataIndex='value'
          xtype='numbercolumn'
          editor='numberfield'
          align='right'
          filterType='number'
        />
        <Column
          text='Quantity'
          dataIndex='quantity'
          xtype='numbercolumn'
          editor='numberfield'
          align='right'
        />
      </Grid>
    )
  }
}