Ext.application({
	name:'MyApp',
	launch:function(){
		var item1 = Ext.create('Ext.Panel',{
			//비율지정
			flex:1,
			style:'background-color:red;color:white;',
			html:'flex:1'
		});
		var item2 = Ext.create('Ext.Panel',{
			//비율지정(상대적)
			flex:2,
			style:'background-color:green;color:white;',
			html:'flex:2'
		});	
		var item3 = Ext.create('Ext.Panel',{
			//비율지정
			flex:1,
			style:'background-color:blue;color:white;',
			html:'flex:1'
		});	
		
		var rootPanel = Ext.create('Ext.Panel',{
			fullscreen:true,
			layout:{type:'hbox',align:'stretch',pack:'center'},
			items:[item1,item2,item3]
		});
	}
});