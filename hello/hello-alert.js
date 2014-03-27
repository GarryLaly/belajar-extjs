Ext.onReady(function(){
	Ext.Msg.show({
		title: 'Status',
		msg: 'Hello World!',
		buttons: Ext.Msg.YESNOCANCEL,
		animEl: 'elId',
		icon: Ext.MessageBox.QUESTION
	});
});
