Ext.application({
	name:'MyApp',
	launch:function(){
		var item1 = Ext.create('Ext.Panel',{
			style:'background-color:red',
			html:'Red'
		});
		var item2 = Ext.create('Ext.Panel',{
			style:'background-color:green',
			html:'Green'
		});
		var item3 = Ext.create('Ext.Panel',{
			style:'background-color:blue',
			html:'Blue'
		});
		var panel = Ext.create('Ext.Panel',{  
			fullscreen:true, //Ext.Viewport.add(panel) 대신사용가능
			layout:'default', // default 레이아웃은 패널의 기본레이아웃이기때문에
			                  // layout:'default' 생략가능
			items:[item1,item2,item3]			
		});
	}
});