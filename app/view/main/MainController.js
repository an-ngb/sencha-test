/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onAddButtonClick: function(){
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        // ...
    },
    onDeleteButtonClick: function(){
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        // ...
    },
    onEditButtonClick: function(){
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        // ...
    },
    onReloadButtonClick: function(){
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        // ...
    },
});
