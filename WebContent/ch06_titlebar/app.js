Ext.application({
	name:'MyApp',
	launch:function(){
	
		var titleBar = Ext.create('Ext.TitleBar',{
			docked:'top',
			ui:'light',
			title:'TitleBar',
			items:[
			       {text:'Prev',ui:'back'},
			       {text:'Next',ui:'forward',align:'right'}
			       ]
		});
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,       
			items:[titleBar]			
		});
	}
});