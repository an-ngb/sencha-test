var myStore = Ext.create('Ext.data.Store', {
    model: 'MyApp.model.Personnel',
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/SpringJavaConfig_war_exploded/api/test',
        noCache: false,
        cors: true,
        useDefaultXhrHeader: false,
        reader: {
            type: 'json',
            rootProperty: 'data',
            implicitIncludes: false,
            headers: { 'Accept': 'application/json' },
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },
    autoLoad: true
});

Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    id: 'grid',

    requires: [
        'MyApp.store.Personnel'
    ],

    store: {
        type: 'personnel',
        autoLoad: true
    },

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
                    items: [{
                        xtype: 'textfield',
                        label: 'asjdhasjkd',
                        placeholder: 'placeholder'
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'checkboxfield label',
                        placeholder: 'placeholder'
                    }
                        //     ,
                        // {
                        //     xtype: 'inputfield',
                        //     label: 'inputfield label',
                        //     placeholder: 'placeholder'
                        // }
                    ]
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
    },
    {
        iconCls: 'buttonIcon',
        xtype: 'button',
        text: 'Reload',
        handler: function () {
            Ext.Ajax.request({
                url: 'http://localhost:8080/SpringJavaConfig_war_exploded/api/test',
                method: 'GET',
                cors: true,
                useDefaultXhrHeader: false,
                disableCaching: false,
                // params: {
                //     barcodeData: Ext.getCmp('BarcodeField')
                // },
                success: function (response, conn) {
                    //Create iframe window with response HTML
                    var data = Ext.decode(response.responseText);
                    myStore.loadRawData(data);
                    console.log(data);
                    Ext.getCmp('grid').getStore().reload();
                },
                failure: function (response, conn) {
                    var data = Ext.decode(response.responseText);
                    alert("Failure: " + data.msg);
                }
            });
        },
        listeners: {
            // afterrender: function(view) {
            //     this.getViewModel().getStore('{myStore}').load(); // this will provide proxy is being loaded
            // }
            // afterrender: function(grid, evt) {

            //     var myStore = grid.getStore();

            //     Ext.Ajax.request({
            //         url: 'http://localhost:8080/SpringJavaConfig_war_exploded/api/test',
            //         success: function(resp) {
            //             var result = Ext.decode(resp.responseText);
            //             myStore.getProxy().data = result;
            //             myStore.load();
            //         },
            //     });

            // }
            // click: 'onReloadButtonClick'
        }
    }
    ],
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

    columns: [
        { text: 'Id', dataIndex: 'id', flex: 1 },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Address', dataIndex: 'address', flex: 1 }
        // ,
        // { text: 'Email', dataIndex: 'email', flex: 1 },
        // { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
