Ext.application({
	name:'MyApp',
	launch:function(){
	
		var homeView = Ext.create('Ext.Panel',{
			title:'Home',
			style:'background-color:#ff0000'
		});
		var loginView = Ext.create('Ext.Panel',{
			title:'Login',
			style:'background-color:#00ff00'
		});
		var listView = Ext.create('Ext.Panel',{
			title:'List',
			style:'background-color:#0000ff'
		});
		var rootPanel = Ext.create('Ext.tab.Panel',{  
			fullscreen:true, 
			ui:'light',
			tabBarPosition:'top',      
			items:[homeView,loginView,listView]			
		});
	}
});