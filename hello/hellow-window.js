Ext.onReady(function(){
	var win;

	win = new Ext.Window({
		applyTo: 'hello-win',
		layout: 'fit',
		width: 500,
		height: 300,
		closeAction: 'hide',
		plain: true,
		items: new Ext.FormPanel({
			frame: true,
			applyTo: 'hello-panel',
			items: [{html:'<div align="center"><font size="+2">Hello World!</font></div>'}]
		});
		buttons: [{
			text: 'Submit',
			disabled: true
		},{
			text: 'Close',
			handler: function(){
				win.hide();
			}
		}]
	});
	win.show();
});