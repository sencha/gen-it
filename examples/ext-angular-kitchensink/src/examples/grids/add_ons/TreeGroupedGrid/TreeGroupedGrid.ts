declare var Ext: any;
import { Component } from "@angular/core";

Ext.require([
    "Ext.grid.filters.*",
    "Ext.grid.plugin.SummaryRow",
    "Ext.data.summary.Average",
    "Ext.data.summary.Sum",
    "Ext.grid.plugin.Summaries"
]);

@Component({
    selector: "treegroupedgrid-component",
    templateUrl: "./TreeGroupedGrid.html",
    styles: [``]
})
export class TreeGroupedGridComponent {
    grid:any;
    showGroupSumMenu:Boolean = false;
    showSumMenu:Boolean = false;
    showVisibilityMenu:Boolean = false;

    onGridReady(event){
        this.grid = event.cmp;
    }
    gridColumns = [
        {
            text: "Company",
            dataIndex: "company",
            groupable: true,
            flex: 1,
            filterType: "string"
        },
        {
            text: "Country",
            dataIndex: "country",
            groupable: true,
            flex: 1,
            filterType: "list"
        },
        {
            text: "Person",
            dataIndex: "person",
            groupable: true,
            summary: "count"
        },
        {
            text: "Date",
            dataIndex: "date",
            xtype: "datecolumn",
            filterType: "date"
        },
        {
            text: "Value",
            dataIndex: "value",
            xtype: "numbercolumn",
            align: "right",
            filterType: "number",
            summary: "average"
        },
        {
            text: "Quantity",
            dataIndex: "quantity",
            xtype: "numbercolumn",
            align: "right",
            summary: "sum"
        }
    ];
    regions = {
        Belgium: "Europe",
        Netherlands: "Europe",
        "United Kingdom": "Europe",
        Canada: "North America",
        "United States": "North America",
        Australia: "Australia"
    };

    getData = function () {
        var data = [],
            items = 500,
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
                quantity: Math.floor(Math.random() * 30 + 1)
            });
        }
        return data;
    };

    store = Ext.create("Ext.data.Store", {
        autoLoad: true,
        fields: [
            { name: "id", type: "int" },
            { name: "company", type: "string" },
            { name: "country", type: "string" },
            { name: "person", type: "string" },
            { name: "date", type: "date", dateFormat: "c" },
            { name: "value", type: "float", allowNull: true },
            { name: "quantity", type: "float", allowNull: true }
        ],
        storeId: "sales",
        groupers: [
            {
                property: "date",
                // you can provide a formatter that is used to create groups
                formatter: 'date("Y")',
            },
            "person",
            "company"
        ],
        data: this.getData(),
    });

    expandAll = (event) =>  {
        this.grid.expandAll();
        this.showVisibilityMenu = false;
    }

    collapseAll = (event) => {
        this.grid.collapseAll();
        this.onCancelVisibilityMenu();
    }

    setGroupSummaryPosition = (btn) => {
        this.grid.setGroupSummaryPosition(btn.sum);
        this.onCancelGroupSumMenu();
    }

    setSummaryPosition = (btn) => {
        this.grid.setSummaryPosition(btn.sum);
        this.onCancelSumMenu();
    }

    onShowGroupSumMenu = () => {
        this.showGroupSumMenu = true;
    }

    onCancelGroupSumMenu = () => {
        this.showGroupSumMenu = false;
    }

    onShowSumMenu = () => {
        this.showSumMenu = true;
    }

    onCancelSumMenu = () => {
        this.showSumMenu = false;
    }

    onShowVisibilityMenu = () => {
        this.showVisibilityMenu = true;
    }

    onCancelVisibilityMenu = () => {
        this.showVisibilityMenu = false;
    }
    
    gridTitleBar = {
        shadow: false,
        items: [
            {
                xtype: "button",
                align: "right",
                text: "Group sum",
                menu: Ext.os.is.Desktop  && {
                    defaults: {
                        handler: this.setGroupSummaryPosition,
                    },
                    indented: false,
                    items: [
                        {
                            text: "Top",
                            sum: "top"
                        },
                        {
                            text: "Bottom",
                            sum: "bottom"
                        },
                        {
                            text: "Hidden",
                            sum: "hidden"
                        }
                    ]
                },
                handler:!Ext.os.is.Desktop && this.onShowGroupSumMenu
            },
            {
                xtype: "button",
                align: "right",
                text: "Sum",
                menu: Ext.os.is.Desktop  &&  {
                    defaults: {
                        handler: this.setSummaryPosition
                    },
                    items:  [
                        {
                            text: "Docked",
                            sum: "docked"
                        },
                        {
                            text: "Top",
                            sum: "top"
                        },
                        {
                            text: "Bottom",
                            sum: "bottom"
                        },
                        {
                            text: "Hidden",
                            sum: "hidden"
                        },
                    ]
                },
                handler:!Ext.os.is.Desktop  && this.onShowSumMenu
            },
            {
                xtype: "button",
                align: "right",
                text: "Visibility",
                menu: Ext.os.is.Desktop  &&  {
                    items: [
                        {
                            text: "Expand all",
                            handler: this.expandAll
                        },
                        {
                            text: "Collapse all",
                            handler: this.collapseAll
                        },
                    ]
                },
                handler:!Ext.os.is.Desktop  && this.onShowVisibilityMenu
            }
        ]
    };
}
