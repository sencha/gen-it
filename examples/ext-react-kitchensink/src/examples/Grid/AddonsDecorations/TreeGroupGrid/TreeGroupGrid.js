import React, {Component} from 'react';
import {ExtTreegroupedgrid} from '@sencha/ext-react-modern';

export default class TreeGroupGridExample extends Component {

  store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    groupers: [{
      property: 'date',
      // you can provide a formatter that is used to create groups
      formatter: 'date("Y")'
    }, 'person', 'company'],
    fields: [
      {name: 'id', type: 'int'},
      {name: 'company', type: 'string'},
      {name: 'country', type: 'string'},
      {name: 'person', type: 'string'},
      {name: 'date', type: 'date', dateFormat: 'c'},
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
    ],
    proxy: {
      type: 'ajax',
      url: 'resources/data/SalesData.json'
    }
  })


  expandAll = function () {
    this.up('grid').expandAll();
  }

  collapseAll = function () {
    this.up('grid').collapseAll();
  }

  setGroupSummaryPosition = function (btn) {
    this.up('grid').setGroupSummaryPosition(btn.sum);
  }

  setSummaryPosition = function (btn) {
    this.up('grid').setSummaryPosition(btn.sum);
  }

  render() {
    return (
      <ExtTreegroupedgrid title="Tree grouped grid"
        store={this.store}
        columnLines
        grouped
        shadow
        groupHeaderTpl='{name} ({group.length})'
        summaryPosition={'docked'}
        titleBar={{
          shadow: false,
          items: [{
            xtype: 'button',
            align: 'right',
            text: 'Group sum',
            menu: {
              defaults: {
                handler: this.setGroupSummaryPosition
              },
              indented: false,
              items: [{
                text: 'Top',
                sum: 'top'
              }, {
                text: 'Bottom',
                sum: 'bottom'
              }, {
                text: 'Hidden',
                sum: 'hidden'
              }]
            }
          }, {
            xtype: 'button',
            align: 'right',
            text: 'Sum',
            menu: {
              defaults: {
                handler: this.setSummaryPosition
              },
              items: [{
                text: 'Docked',
                sum: 'docked'
              }, {
                text: 'Top',
                sum: 'top'
              }, {
                text: 'Bottom',
                sum: 'bottom'
              }, {
                text: 'Hidden',
                sum: 'hidden'
              }]
            }
          }, {
            xtype: 'button',
            align: 'right',
            text: 'Visibility',
            menu: {
              items: [{
                text: 'Expand all',
                handler: this.expandAll
              }, {
                text: 'Collapse all',
                handler: this.collapseAll
              }]
            }
          }]
        }}
        columns={[
          {
            text: 'Company',
            dataIndex: 'company',
            groupable: true,
            flex: 1,
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
            summary: 'count'
          },
          {
            text: 'Date',
            dataIndex: 'date',
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
          }
        ]}
        itemConfig={{
          header: {
            tools: {
              refresh: {
                handler: this.onGroupRefresh
              },
              print: {
                handler: this.onGroupPrint,
                tooltip: 'Print group...',
                zone: 'tail'
              },
              save: {
                handler: this.onGroupSave,
                zone: 'end'
              }
            }
          }
        }}
        platformConfig={{
          desktop: {
            plugins: {
              groupingpanel: true,
              gridsummaries: true
            }
          },
          '!desktop': {
            plugins: {
              groupingpanel: true,
              gridsummaries: true
            }
          }
        }}
      >
      </ExtTreegroupedgrid>
    )
  }
}