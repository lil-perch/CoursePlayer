Ext.define('Player.view.phone.LowerToolBarPhone', {
  extend: 'Player.view.main.LowerToolBar',
  xtype: 'lowertoolbarphone',

  requires: [
    'Player.view.phone.LowerToolBarController'
  ],

  controller: 'lowertoolbarphone',

  style: 'box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);',

  config: {
    baseCls: 'x-toolbar',
    docked: 'bottom',
    height: 47,
    layout: {
      align: 'center',
      pack: 'center',
      type: 'hbox'
    },
    cls: [
      'x-toolbar-light'
    ],
    hideAnimation: {
      type: 'slideOut',
      direction: 'down',
      duration: 400
    },
    showAnimation: {
      type: 'slideIn',
      direction: 'up',
      duration: 400
    },
    items: [{
      xtype: 'button',
      id: 'previousPageBtn',
      cls: 'previous-btn',
      ui: 'action',
      action: 'previousPage',
      iconAlign: 'center',
      iconCls: 'pictos pictos-arrow_left',
      handler: 'onPreviousPageBtnTap'
    }, {
      xtype: 'spacer'
    }, {
      xtype: 'button',
      id: 'narrationTextBtn',
      itemId: 'narrationBtn',
      cls: 'narration-btn',
      ui: 'action',
      iconCls: 'pictos pictos-chat',
      action: 'shownarration',
      bind: {
        hidden: '{!narration}',
        disabled: '{narrationDisabled}'
      }
    }, {
      xtype: 'spacer'
    }, {
      xtype: 'button',
      itemId: 'phoneTocBtn',
      cls: 'toc-btn',
      ui: 'action',
      iconCls: 'pictos pictos-list',
      iconAlign: 'center',
      action: 'showtoc',
      handler: 'onShowToc'
    }, {
      xtype: 'spacer'
    }, {
      xtype: 'button',
      id: 'glossaryBtn',
      ui: 'action',
      iconCls: 'pictos pictos-table',
      action: 'showGlossary',
      bind: {
        hidden: '{!glossary}'
      }
    }, {
      xtype: 'spacer'
    }, {
      xtype: 'button',
      id: 'nextPageBtn',
      cls: 'next-btn',
      ui: 'action',
      action: 'nextPage',
      iconCls: 'pictos pictos-arrow_right'
    }]
  }
});