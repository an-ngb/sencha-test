Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',

    autoLoad: true,
    pageSize: null,

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
    }
});
