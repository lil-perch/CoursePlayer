Ext.define('Player.view.main.UpperToolBar', {
	extend: 'Ext.toolbar.Toolbar',
	xtype: 'uppertoolbar',

	requires: [
		'Player.view.main.UpperToolbarModel'
	],

	reference: 'upperToolBar',
	viewModel: {
		type: 'uppertoolbar'
	},
	cls: 'uppertoolbar',
	height: 47,
	layout: {
		align: 'center',
		type: 'hbox'
	},
	items: [{
		xtype: 'container',
		cls: 'courseTitle',
		bind: {
			html: '{coursetitle}'
		}
	}, {
		xtype: 'tbspacer',
		width: 696
	}, {
		xtype: 'button',
		text: 'Glossary',
		ui: 'default',
		iconCls: 'pictos pictos-table',
		action: 'showGlossary',
		cls: 'showGlossary'
	}, {
		xtype: 'button',
		action: 'showHelp',
		cls: 'showHelp',
		ui: 'default',
		iconCls: 'pictos pictos-question',
		bind: {
			hidden: '{!showHelp}'
		}
	}, {
		xtype: 'button',
		iconCls: 'pictos pictos-delete',
		ui: 'default',
		action: 'close',
		cls: 'close',
		bind: {
			hidden: '{!showClose}'
		}
	}]
});