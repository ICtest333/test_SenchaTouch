Ext.application({
	name:'MyApp',
	launch:function(){
		var btn1 = Ext.create('Ext.Button',{text:'버튼1'});
		var btn2 = Ext.create('Ext.Button',{text:'버튼2'});
		var btn3 = Ext.create('Ext.Button',{text:'버튼3'});
		var btn4 = Ext.create('Ext.Button',{text:'버튼4'});
		var btn5 = Ext.create('Ext.Button',{text:'버튼5'});
		var btn6 = Ext.create('Ext.Button',{text:'버튼6'});

		var panel1 = Ext.create('Ext.Panel',{
			layout:{type:'hbox',align:'center',pack:'justify'},
			items:[btn1,btn2,btn3],
			style:'background-color:#00ff00'
		});
		
		var panel2 = Ext.create('Ext.Panel',{
			layout:{type:'hbox',align:'center',pack:'justify'},
			items:[
			       Ext.create('Ext.Spacer',{height:200}),
			       btn4,
			       Ext.create('Ext.Spacer'),
			       btn5,
			       Ext.create('Ext.Spacer'),
			       btn6,
			       Ext.create('Ext.Spacer')
			       ],
			style:'background-color:#0000ff'
		});		
		
		var rootPanel = Ext.create('Ext.Panel',{
			fullscreen:true,
			layout:{type:'vbox',align:'stretch',pack:'start'},
			items:[panel1,panel2]
		});
	}
});