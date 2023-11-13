/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Personnel',
    buttons: [{
        iconCls: 'buttonIcon',
        xtype: 'button',
        text: 'Add',
        listeners: {
            click: function () {
                new Ext.form.Panel({
                    width: 500,
                    height: 400,
                    title: 'test',
                    floating: true,
                    closable: true,
                    bodyPadding: 20,
                    layout: 'vbox',
                    items: [{
                        xtype: 'textfield',
                        label: 'asjdhasjkd',
                        placeholder: 'placeholder'
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'checkboxfield label',
                        placeholder: 'placeholder'
                    }]
                }).show()
            }
            // 'onAddButtonClick'
        }
    },
    {
        iconCls: 'buttonIcon',
        xtype: 'button',
        text: 'Delete',
        listeners: {
            click: 'onDeleteButtonClick'
        }
    },
    {
        iconCls: 'buttonIcon',
        xtype: 'button',
        text: 'Edit',
        listeners: {
            click: 'onEditButtonClick'
        }
    }],
    header: {
        style: {
            backgroundColor: 'pink'
        },
        // iconCls: 'fa-home',
        // // The following grid shares a store with the classic version's grid as well!
        // items: [{
        //     xtype: 'mainlist'
        // }]
    },

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
