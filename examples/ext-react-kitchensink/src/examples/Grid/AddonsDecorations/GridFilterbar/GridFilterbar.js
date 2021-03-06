import React, { Component } from "react";
import { Grid, Column } from "@sencha/ext-react-modern";
import "./EmployeeData";

export default class GridFilterBarExample extends Component {
  fields = [
    { name: "id", type: "int" },
    { name: "company", type: "string" },
    { name: "country", type: "string" },
    { name: "person", type: "string" },
    {
      name: "date",
      type: "date",
      dateFormat: "c",
      convert: function (date) {
        return date ? Ext.Date.format(new Date(date), "m/d/Y") : "";
      },
    },
    { name: "value", type: "float", allowNull: true },
    { name: "quantity", type: "float", allowNull: true },
    {
      name: "year",
      calculate: function (data) {
        return parseInt(Ext.Date.format(data.date, "Y"), 10);
      },
    },
    {
      name: "month",
      calculate: function (data) {
        return parseInt(Ext.Date.format(data.date, "m"), 10) - 1;
      },
    },
    {
      name: "continent",
    },
  ];

  store = Ext.create("Ext.data.Store", {
    autoLoad: true,
    filters: [
      {
        property: "country",
        operator: "==",
        value: "Belgium",
      },
    ],
    fields: this.fields,
    proxy: {
      type: "ajax",
      url: "resources/data/SalesData.json",
    },
  });

  salesGridConfig = {
    store: {
      autoLoad: true,
      filters: [
        {
          property: "country",
          operator: "==",
          value: "Belgium",
        },
      ],
      fields: this.fields,
      proxy: {
        type: "ajax",
        url: "resources/data/SalesData.json",
      },
    },
    columns: [
      {
        text: "Company",
        dataIndex: "company",
        editor: "textfield",
        flex: 1,
        width: 150,
        groupable: true,
        filterType: "string",
      },
      {
        text: "Country",
        dataIndex: "country",
        editor: "textfield",
        flex: 1,
        width: 150,
        groupable: true,
        filterType: "list",
      },
      {
        text: "Person",
        dataIndex: "person",
        editor: "textfield",
        groupable: true,
      },
      {
        text: "Date",
        dataIndex: "date",
        xtype: "datecolumn",
        flex: 1,
        format: "d.m.Y",
        filterType: "date",
      },
      {
        text: "Value",
        dataIndex: "value",
        xtype: "numbercolumn",
        editor: "numberfield",
        align: "right",
        filterType: "number",
      },
      {
        text: "Quantity",
        dataIndex: "quantity",
        xtype: "numbercolumn",
        editor: "numberfield",
        align: "right",
      },
    ],
  };

  employeesGridConfig = {
    store: {
      fields: [
        {
          name: "fullName",
          convert: function (v, rec) {
            return rec.get("forename") + " " + rec.get("surname");
          },
        },
        {
          name: "dob",
          convert: function (v) {
            if (v) {
              return v.slice(4, 6) + "/" + v.slice(6, 8) + "/" + v.slice(0, 4);
            }
          },
        },
        {
          name: "joinDate",
          convert: function (v) {
            if (v)
              return v.slice(4, 6) + "/" + v.slice(6, 8) + "/" + v.slice(0, 4);
          },
        },
        "noticePeriod",
        "email",
        "department",
        "salary",
      ],
      autoLoad: true,
      pageSize: 0,
      proxy: {
        type: "ajax",
        url: "/KitchenSink/EmployeeData",
      },
    },
    columns: [
      {
        text: "Name",
        dataIndex: "fullName",
        renderer: this.concatNames,
        groupable: true,
        flex: 1,
        width: 200,
        filterType: { type: "string", value: "danni" },
      },
      {
        text: "Date of birth",
        dataIndex: "dob",
        xtype: "datecolumn",
        format: "m/d/Y",
        filterType: "date",
      },
      {
        text: "Join date",
        xtype: "datecolumn",
        dataIndex: "joinDate",
        format: "m/d/Y",
        filterType: "date",
      },
      {
        text: "Notice<br>period",
        dataIndex: "noticePeriod",
        groupable: true,
        filterType: "list",
      },
      {
        text: "Email address",
        dataIndex: "email",
        renderer: (v) =>
          '<a href="mailto:' + v + '">' + Ext.htmlEncode(v) + "</a>",
        cell: { encodeHtml: false },
        filterType: "string",
      },
      { text: "Department", dataIndex: "department", filterType: "list" },
      {
        text: "Salary",
        dataIndex: "salary",
        xtype: "numbercolumn",
        align: "right",
        filterType: { type: "number", operator: ">=" },
      },
    ],
  };

  onGridStoreReady = function (grid) {
    this.setupStoreListeners(this.store, grid);
  };

  setupStoreListeners = function (store, grid) {
    Ext.destroy(this.storeListeners);
    this.storeListeners = store.on({
      filterchange: this.onFilterChanged.bind(grid),
    });
  };

  doReconfigure = function (menu) {
    var config = menu.grid,
      grid = menu.up("grid"),
      store,
      filters;

    // we set the store first because columns may bring additional filters on the store
    grid.setStore(config.store);
    grid.setColumns(config.columns);

    store = grid.getStore();

    this.setupStoreListeners(store, grid);
    filters = store.getFilters(false);
    grid.getViewModel().set("filtered", filters && filters.length > 0);
  };

  renderMailto = function (v) {
    return '<a href="mailto:' + v + '">' + Ext.htmlEncode(v) + "</a>";
  };

  showFilterBar = function () {
    this.up("grid").showFilterBar();
  };

  hideFilterBar = function () {
    this.up("grid").hideFilterBar();
  };

  onFilterChanged = function (store, filters) {
    this.getViewModel().set("filtered", filters.length > 0);
  };

  clearFilters = function () {
    var filters = this.up("grid").getStore().getFilters(false);

    if (filters) {
      filters.removeAll();
    }
  };

  onVisibilityClick = () => {
    this.setState({ showVisibilityMenu: true });
  };

  onReconfigureMenuClick = () => {
    this.setState({ showReconfigureMenu: false });
  };

  render() {
    return (
      <Grid
        title="Grid FilterBar"
        store={this.store}
        columnLines
        grouped
        shadow
        rowNumbers="true"
        emptyText="No Matching Records"
        viewModel={true}
        listeners={{
          painted: this.onGridStoreReady.bind(this),
        }}
        titleBar={{
          shadow: false,
          items: [
            {
              xtype: "button",
              align: "right",
              text: "Visibility",
              menu: [
                {
                  text: "Show",
                  handler: this.showFilterBar,
                },
                {
                  text: "Hide",
                  handler: this.hideFilterBar,
                },
              ],
              handler: this.onVisibilityClick,
            },
            {
              xtype: "button",
              align: "right",
              text: "Reconfigure",
              menu: [
                {
                  text: "Sales data",
                  handler: this.doReconfigure.bind(this),
                  grid: this.salesGridConfig,
                },
                {
                  text: "Employees data",
                  handler: this.doReconfigure.bind(this),
                  grid: this.employeesGridConfig,
                },
              ],
              handler: this.onReconfigureMenuClick,
            },
            {
              xtype: "button",
              align: "right",
              reference: "clearFilterButton",
              text: "Clear filters",
              handler: this.clearFilters,
              bind: {
                disabled: "{!filtered}",
              },
            },
          ],
        }}
        platformConfig={{
          desktop: {
            plugins: {
              gridfilterbar: true,
            },
          },
          "!desktop": {
            plugins: {
              gridfilterbar: true,
            },
          },
        }}
      >
        <Column
          text="Company"
          dataIndex="company"
          flex={1}
          groupable={true}
          filterType="string"
        />
        <Column
          text="Country"
          dataIndex="country"
          flex={1}
          groupable={true}
          filterType="list"
        />
        <Column text="Person" dataIndex="person" groupable={true} />
        <Column
          text="Date"
          dataIndex="date"
          format="m/d/Y"
          xtype="datecolumn"
          filterType="date"
        />
        <Column
          text="Value"
          dataIndex="value"
          xtype="numbercolumn"
          editor="numberfield"
          align="right"
          filterType="number"
        />
        <Column
          text="Quantity"
          dataIndex="quantity"
          xtype="numbercolumn"
          editor="numberfield"
          align="right"
        />
      </Grid>
    );
  }
}
