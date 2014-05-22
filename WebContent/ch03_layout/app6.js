Ext.application({
	name:'MyApp',
	launch:function(){
		var card1 = Ext.create('Ext.Panel',{
			style:'background-color:#ff0000'
		});
		var card2 = Ext.create('Ext.Panel',{
			style:'background-color:#00ff00'
		});
		var card3 = Ext.create('Ext.Panel',{
			style:'background-color:#0000ff'
		});
		
		var cardPanel = Ext.create('Ext.Panel',{
			flex:1,
			layout:'card',
			items:[card1,card2,card3]
		});
		
		var toolbar = Ext.create('Ext.Toolbar',{
			docked:'top',
			items:[
			       Ext.create('Ext.Button',{
			    	   text:'Red',
			    	   handler:function(btn,event){
			    		   cardPanel.setActiveItem(0);
			    	   }
			       }),
			       Ext.create('Ext.Button',{
			    	   text:'Green',
			    	   handler:function(btn,event){
			    		   cardPanel.setActiveItem(1);
			    	   }
			       }),
			       Ext.create('Ext.Button',{
			    	   text:'Blue',
			    	   handler:function(btn,event){
			    		   cardPanel.setActiveItem(2);
			    	   }
			       })
			       ]
		});
		
		var rootPanel = Ext.create('Ext.Panel',{
			fullscreen:true,			
			layout:'vbox',
			items:[toolbar,cardPanel]
		});
	}
});