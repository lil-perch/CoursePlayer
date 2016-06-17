Ext.define('Player.view.main.LowerToolBar', {
  extend: 'Ext.toolbar.Toolbar',
  xtype: 'lowertoolbar',

  requires: [
    'Player.view.main.LowerToolbarModel',
    'Ext.toolbar.Toolbar',
    'Ext.toolbar.Spacer',
    'Ext.button.Button'
  ],

  reference: 'lowerToolBar',
  viewModel: {
    type: 'lowertoolbar'
  },
  cls: 'lowerToolBar',

  layout: {
    align: 'center',
    pack: 'center',
    type: 'hbox'
  },
  items: [{
    xtype: 'toolbar',
    width: '100%',
    padding: '2 0 2 2',
    items: [{
      xtype: 'button',
      iconCls: 'pictos pictos-arrow_left',
      ui: 'default',
      width: 40,
      height: 40,
      cls: 'previousPage',
      action: 'previousPage'
    }, {
      xtype: 'tbspacer',
      flex: 2
    }, {
      xtype: 'container',
      bind: {
        hidden: '{!pageNumbering}',
        html: "{pageNumber} of {totalPageNumber}"
      }
    }, {
      xtype: 'tbspacer',
      flex: 1
    }, {
      xtype: 'button',
      itemId: 'narrationBtn',
      iconCls: 'pictos pictos-chat',
      disabled: false,
      ui: 'default',
      action: 'shownarration'
    }, {
      xtype: 'tbspacer',
      flex: 1
    }, {
      xtype: 'button',
      iconCls: 'pictos pictos-arrow_right',
      ui: 'default',
      width: 40,
      height: 40,
      cls: 'nextPage',
      action: 'nextPage'
    }]
  }]
});