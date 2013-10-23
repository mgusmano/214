Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
        //'Ext.dataview.DataView',
        //'Ext.data.proxy.JsonP'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [



            {
                title: 'arrow_down',
                iconCls: 'arrow_down',
                items: [
                    {
                        xtype: 'image',
                        src: 'http://plascehold.it/200x200',
                        width: 200,
                        height: 200
                    },
                    {
                        xtype: 'button',
                        text: 'Photo',
                        handler: function () {

                            function success(image_uri) {
                                var img = Ext.ComponentQuery.query('image')[0];
                                img.setSrc(image_uri);
                            };

                            function fail(message) {
                                alert(message);
                            };

                            navigator.camera.getPicture(success, fail,
                                {
                                    quality: 50,
                                    destinationType: navigator.camera.DestinationType.FILE_URI,
                                    sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
                                })
                        }
                    }


                ]
            },



            { xtype: 'risks' },
            //{ xtype: 'tomatos' },

            {title: 'calendar', iconCls: 'calendar', badgeText: '5', 
			items: [
				{ 
					xtype: 'button',
					text: 'hi',
					width: 200,
					height: 100,
					listeners: {
					    tap: function () {

					        var ref = window.open('http://mjguitester.azurewebsites.net/sites/97370/Portal.aspx', '_blank', 'location=yes');
					        var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetRiskBurndown';
					        var theParms = { type: 1, projectId: 97370 };
					        var me = this;
					        alert('hi');
					        $.ajax(com.ajaxObject(theUrl, theParms, false))
                            .fail(function (data) { throw data.status + '-' + data.statusText + ': ' + theUrl; })
                            .done(function (data) {
                                alert('severity: ');
                                //alert('severity: ' + data.Matrix[0].severity);
                                Ext.getCmp('actionID').tab.setBadgeText(data.Matrix[0].severity);
                           });
				
						
						}
					}
				
				}
			]
			},
			
			{
				title: 'action', iconCls: 'action', id: 'actionID',

						layout: 'fit',
				//scrollable: true,
				items: [
			
				
				
					//{ 
					//	xtype: 'dataview',
					//	height: 500,
					//	width: 500,
					//	//fullscreen: true,
					//	//emspeedlayout: 'fit',
					//	store: {
					//		autoLoad: true,
					//		fields: ['id', 'title', 'synopsis',
					//		 {
					//		     name:'thumbnail_image',
					//			 convert: function(v, record) {return record.raw.posters.thumbnail; }
					//		 }
					//		 ],
					//		proxy: {
					//			type: 'jsonp',
					//			// Modify this line with your API key, pretty please...
					//			url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=hbjgfgryw8tygxztr5wtag3u&q=Horror',

					//			reader: {
					//				type: 'json',
					//				rootProperty: 'movies'
					//			}
					//		}
					//	},
					//	itemTpl: '<img src="{thumbnail_image}" /><p>{title}</p><p>{synopsis}</p>'
					//}
				]
			},	
			
			
			
			
            //{
            //    title: 'add', iconCls: 'add',
            //    scrollable: true,
            //    listeners: {
            //        activate: function () {
            //            //            debugger;
            //            //alert('activate add');
            //            this.down('risks').getData();

            //        }
            //    },

            //    items: [
            //        { xtype: 'container', html: '1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>8' },
            //        { xtype: 'risks' },
            //        { xtype: 'container', html: '8</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1' },
            //        { xtype: 'container', html: '1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1</br>1' },
            //        { xtype: 'container', html: '2' },
            //        {
            //            xtype: 'container',
            //            data: {
            //                projectId: 'my test value'
            //            },
            //            tpl: 'Testing: {projectId}'


            //        }
            //    ]
            //},





            { title: 'arrow_down', iconCls: 'arrow_down' },
            { title: 'arrow_left', iconCls: 'arrow_left' },
            { title: 'arrow_right', iconCls: 'arrow_right' },
            { title: 'arrow_up', iconCls: 'arrow_up' },
            //{ title: 'compose', iconCls: 'compose' },
            //{ title: 'delete', iconCls: 'delete' },
            //{ title: 'organize', iconCls: 'organize' },
            //{ title: 'refresh', iconCls: 'refresh' },
            //{ title: 'reply', iconCls: 'reply' },
            //{ title: 'search', iconCls: 'search' },
            //{ title: 'settings', iconCls: 'settings' },
            //{ title: 'star', iconCls: 'star' },
            //{ title: 'trash', iconCls: 'trash' },
            //{ title: 'maps', iconCls: 'maps' },
            //{ title: 'locate', iconCls: 'locate' },
            //{ title: 'home', iconCls: 'home' },
            //{ title: 'bookmarks', iconCls: 'bookmarks' },
            //{ title: 'download', iconCls: 'download' },
            //{ title: 'favorites', iconCls: 'favorites' },
            //{ title: 'info', iconCls: 'info' },
            //{ title: 'more', iconCls: 'more' },
            //{ title: 'time', iconCls: 'time' },
            //{ title: 'user', iconCls: 'user' },
            //{ title: 'team', iconCls: 'team' },	
		
		
		

		
            {
                title: 'Welcome',
                iconCls: 'home',
				id: 'mjg',
                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
