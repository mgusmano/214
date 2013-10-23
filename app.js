
Ext.define('EMSPEED.common.com', {
    singleton: true,
    alternateClassName: 'com',

    ajaxUrl: function (theService, theMethod) {
        //return 'http://' + location.hostname + ':8095/' + 'api/' + theService + '/' + theMethod;
        return 'http://' + location.hostname + ':8095/' + theService + '.svc/json/' + theMethod;
    },

    ajaxObject: function (theUrl, theParms, theAsync) {
        if (theAsync === undefined) {
            theAsync = true;
        }
        return {
            url: theUrl,
            type: 'POST',
            crossDomain: true,
            data: Ext.encode(theParms),
            contentType: "application/json; charset=utf-8",
            xhrFields: { withCredentials: true },
            dataType: 'json',
            async: theAsync
        };
    }
});




/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'MyApp',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main',
        'Risks',
        'Tomatos'
],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('MyApp.view.Main'));


        var menu = Ext.create("Ext.Menu", {
            defaults: {
                xtype: "button"
            },
            width: '80%',
            scrollable: 'vertical',
            items: [
                {
                    text: 'Projects',
                    iconCls: 'time',
                    menu: "opening",
                    listeners: {
                        tap: function () {
                            Ext.Viewport.hideAllMenus();
                        }
                    }
                },
                {
                    text: 'Requirements',
                    iconCls: 'locate',
                    menu: "theatres"
                },
                {
                    text: 'Team',
                    iconCls: 'team',
                    menu: "upcoming"
                },
                {
                    text: 'Top',
                    iconCls: 'bank',
                    menu: 'top'
                },
                {
                    text: 'Search',
                    iconCls: 'search',
                    menu: "search"
                }
            ]
        });

        Ext.Viewport.setMenu(menu, {
            side: 'left',
            reveal: true
        });




    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
