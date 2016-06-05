Ext.define('Player.view.main.Main', {
  extend: 'Ext.container.Viewport',
  xtype: 'app-main',

  requires: [
    'Ext.plugin.Viewport',
    //'Ext.window.MessageBox',
    'Player.view.tableofcontents.TableOfContents',
    'Player.view.main.UpperToolBar',
    'Player.view.main.MainController',
    'Player.view.main.MainModel',
    'Player.view.main.List',
    'Player.view.page.Pages',
    'Player.view.main.LowerToolBar',
    'Player.view.main.Glossary',
    'Player.view.main.NarrationPanel',
    'Player.view.main.TimerBar',
    'Player.view.main.HelpPanel'
  ],

  controller: 'main',
  viewModel: 'main',

  layout: {
        type: 'hbox',
        align: 'middle',
        pack: 'center'
    },

  items: [{
      xtype: 'glossary',
      itemId: 'glossaryWindow'
    }, {
      xtype: 'narrationpanel',
      itemId: 'narrationWindow'
    }, {
      xtype: 'helppanel',
      itemId: 'helpWindow'
    }, {
      xtype: 'container',
      layout: 'border',
      cls: 'vp',
      width: 1020,
      height: 750,
      items: [{
        xtype: 'tableofcontents',
        width: 250,
        cls: 'tableofcontents',
        collapsible: true,
        collapsed: true,
        hideCollapseTool: true,
        iconCls: 'pictos pictos-list',
        closeAction: 'hide',
        titleRotation: 0,
        titleCollapse: false,
        title: '',
        title: Lang.tableofcontents,
        region: 'west',
        split: false
      }, {
        xtype: 'container',
        region: 'center',
        cls: 'center-container',
        layout: 'border',
        items: [{
          xtype: 'uppertoolbar',
          region: 'north',
          height: 50,
          itemId: 'upperToolbar'
        }, {
          itemId: 'contentPanel',
          layout: {
            type: 'vbox',
            align: 'stretch'
          },
          items: [{
            xtype: 'timerbar',
            hidden: true
          }, {
            xtype: 'pages',
            height: 657,
            width: 975
          }, {
            xtype: 'lowertoolbar',
            height: 40
          }]
        }]
      }]
    }



  ]
});