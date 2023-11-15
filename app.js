/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */

Ext.Loader.setConfig({
    disableCaching: false
});

Ext.application({
    extend: 'MyApp.Application',

    name: 'MyApp',

    requires: [
        // This will automatically load all classes in the MyApp namespace
        // so that application classes do not need to require each other.
        'MyApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyApp.view.main.Main',
    // launch: function () {
    //     Ext.Ajax.request({
    //         url: 'http://localhost:8080/api/controller',
    //         method: "GET",
    //         disableCaching: false,
    //         useDefaultXhrHeader : false,
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*'
    //         },
    //         success: function (response, opts) {
    //             var obj = Ext.decode(response.responseText);
    //             console.dir(obj);
    //         },
    
    //         failure: function (response, opts) {
    //             console.log('server-side failure with status code ' + response.status);
    //         }
    //     });
    
    // }
});
