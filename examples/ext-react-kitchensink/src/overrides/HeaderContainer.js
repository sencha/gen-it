Ext.override(Ext.grid.HeaderContainer, {
    factoryItem: function (item) {
        var grid = this.getGrid(),
            colItem = item;

        if (item.isComponent) {
            if (item.isGridColumn) {
                item.setGrid(grid);
            }
        } else {
            item = Ext.apply({
                grid: grid
            }, item);

            // item is having $initParent property. But when apply is used the orginal item is not changed and new reference is created for it.
            // Need to remove $initParent from the orginal item.
            delete colItem.$initParent;
        }

        return this.callParent([item]);
    }
});
