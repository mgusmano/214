Ext.define('MyApp.view.Risks', {
    extend: 'Ext.Container',
    xtype: 'risks',

    initialize: function () {
        this.create();
    },

    create: function () {
        this.removeAll(false);
        this.add(this.getHeaderBar());
        this.add(this.getList());
        this.getData();
    },

    _headerBar: null,
    getHeaderBar: function () {
        if (!this._headerBar) {
            this._headerBar = Ext.create("Ext.Toolbar", {
                xtype: "toolbar",
                style: {
                    background: 'white'
                },

                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                title: this.getTitle(),
                items: this.getHeader()
            });
        }
        return this._headerBar;
    },

    _list: null,
    getList: function () {
        if (!this._list) {
            this._list = Ext.create("Ext.Container", {
                id: 'theData',
                flex: 1,
                margin: '10 10 10 10',
                tpl: [
                    '<div class="project-header">',
                    '<tpl if="level &gt; 1">',
                        '<div class="row">',
                            '<tpl if="isParentAccessible==true">',
                                '<div class="parent-project"><p><a href="/sites/{parentProjectId}/Portal.aspx"><span class="pdd-id">{parentProjectId} &ndash; </span> {parentProjectName}</a></p></div>',
                            '<tpl else>',
                                '<div class="parent-project"><p><span class="pdd-id">{parentProjectId} &ndash; </span> {parentProjectName}</p></div>',
                            '</tpl>',
                        '</div>',
                    '</tpl>',
                    '<div class="row">',
                        '<div class="project-title <tpl if="level &gt; 1">has-parent</tpl>"><h2><span>{projectId} &ndash; </span> {projectName} <span class="product-group">{productGroupCode}</span></h2></div>',
                        '<div class="project-last-update"><span class="label">Updated:</span> <span class="value">{timeSpanFromLastUpdate}</span> </div>',
                    '</div>',
                    '<div class="row">',
                        '<div class="pm-pc">',
                            '<span class="label">Project Manager:</span> <span class="value">{projectManager}</span>',
                            '<span class="spacer">&nbsp;</span>',
                            '<span class="label">Product Champion:</span> <span class="value">{productChampion}</span>',
                        '</div>',
                    '</div>',
                '</div>'
                ]
            });
        }
        return this._list;
    },




    config: {
        layout: 'vbox',
        title: null,
        iconCls: 'calendar',
        title: 'risks',  
        badgeText: '6',
        header: {
            iconCls: "list",
            ui: "plain",
            left: 0,
            listeners: {
                tap: function () {
                    Ext.Viewport.toggleMenu("left");
                }
            }
        }

        //listeners: {
        //    activate: function () {
        //        this.getData();
        //    }
        //}
    },

    getParams: function () {
        var sParams = {
            "filter": {
                "loadAuditInfo": true,
                "loadBaseAttributes": true,
                "loadDfxKpis": false,
                "loadLevelInfo": true,
                "loadManagement": true,
                "loadPmtKpis": false,
                "loadUrls": false,
                "projectId": 97370,
                "rollUpThresholdId": 1,
                "rollUpSubProjectIds": [1]
            }
        };
        return sParams;
    },

    getData: function () {
        var me = this;
        var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetProject';
        var theParms = this.getParams();
        $.ajax(com.ajaxObject(theUrl, theParms))
        .done(function (data) {
            debugger;
            //me.down('dataview').setData(data);
            Ext.getCmp('theData').setData(data);
        })
        .fail(function (data) {
            throw data.status + '-' + data.statusText + ': ' + theUrl;
        });
    }
});
