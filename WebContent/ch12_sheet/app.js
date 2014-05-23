Ext.application({
	name:'MyApp',
	launch:function(){
	
		var loginForm = Ext.create('Ext.form.Panel',{
			layout:{
				type:'vbox',
				align:'stretch'
			},
			items:[
			       {xtype:'textfield',name:'mid',value:'user',label:'아이디'},
			       {xtype:'passwordfield',name:'mpassword',value:'1234',label:'비밀번호'},
			       {xtype:'spacer'},
			       {
			    	   xtype:'panel',
			    	   layout:{type:'hbox',align:'center',pack:'center'},
			    	   items:[
			    	          {xtype:'button',text:'로그인',ui:'decline',width:100},
			    	          {xtype:'spacer',width:20},
			    	          {xtype:'button',text:'취소',ui:'decline',width:100,
			    	        	  handler:function(){
			    	        		  sheet.hide(); //sheet안보여지게처리(default)
			    	          }}
			    	          ]
			       }
			       ]
		});
		
		//sheet 생성
		var sheet = Ext.create('Ext.Sheet',{
			left:0,
			right:0,
			bottom:0,
			height:200,
			layout:'fit',
			items:[loginForm]
		});
		
		var toolbar = Ext.create('Ext.Toolbar',{
			docked:'top',
			items:[
			       {
			    	   text:'로그인',
			    	   ui:'confirm',
			    	   handler:function(){
			    		   Ext.Viewport.add(sheet);//sheet보여지게처리할경우필요코드
			    		   sheet.show();//sheet보여지게(하단부에서올라오는UI,아이폰UI영향받음)
			    	   }                //height:200만큼
			       }
			       ]
		});
		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,
			items:[toolbar]
		});
	}
});