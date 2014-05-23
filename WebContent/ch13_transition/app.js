Ext.application({
	name:'MyApp',
	launch:function(){
	
		var homeView = Ext.create('Ext.Panel',{
			style:'background-color:#ff0000'
		});
		var loginView = Ext.create('Ext.Panel',{
			style:'background-color:#00ff00'
		});
		var listView = Ext.create('Ext.Panel',{
			style:'background-color:#0000ff'
		});
		
		var toolbar = Ext.create('Ext.Toolbar',{
			docked:'top',
			/*
			애니메이션		설명
			slide			옆으로 이동하는 애니메이션
			flip			수평으로 좁혀졌다가 펼쳐지듯이 이동하는 애니메이션	
			fade			희미해지면서 이동하는 애니메이션
			pop				팝업 형태로 올라오는 애니메이션
			cube			입방체 모양으로 이동하는 애니메이션
			*/
			items:[
			       {
			    	   text:'HomeView',ui:'confirm',
			    	   handler:function(btn,event){
			    		   rootPanel.getLayout().setAnimation({type:'slide',direction:'right'});
			    		   rootPanel.setActiveItem(0);
			    	   }
			       },
			       {
			    	   text:'LoginView',ui:'confirm',
			    	   handler:function(btn,event){
			    		   rootPanel.getLayout().setAnimation('flip');
			    		   rootPanel.setActiveItem(1);
			    	   }
			       },
			       {
			    	   text:'ListView',ui:'confirm',
			    	   handler:function(btn,event){
			    		   rootPanel.getLayout().setAnimation('fade');
			    		   rootPanel.setActiveItem(2);
			    	   }
			       }
			       ]			
		});
		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,
			layout:'card',
			items:[toolbar,homeView,loginView,listView]
		});
	}
});