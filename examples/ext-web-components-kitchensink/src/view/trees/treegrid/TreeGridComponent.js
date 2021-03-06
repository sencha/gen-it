import './TreeGridComponent.html';
import data from './data';

export default class TreeGridComponent {
    treeReady = (event) => {
        this.treeCmp = event.detail.cmp;
        const isPhone = Ext.os.is.Phone;
        const top = !isPhone ? '10' : null;
        const left = !isPhone ? '10' : null;
        const width = !isPhone ? '400' : null;
        const height = !isPhone ? '600' : null;

        this.store = Ext.create('Ext.data.TreeStore', {
            rootVisible: true,
            root: data
        });

        this.treeCmp.setTop(top);
        this.treeCmp.setLeft(left);
        this.treeCmp.setWidth(width);
        this.treeCmp.setHeight(height);
        this.treeCmp.setStore(this.store);
    }
}
