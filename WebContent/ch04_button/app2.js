Ext.application({
	name:'MyApp',
	launch:function(){
		
		var item1 = {
				layout:'hbox',
				items:[
				       {xtype:'button',ui:'normal',text:'normal',iconCls:'action',iconMask:true},
				       {xtype:'button',ui:'round',text:'round'},
				       {
				    	   xtype:'button',
				    	   height:'100', //높이지정
				    	   text:'<img src=bug.png width=15> user Icon' //아이콘커스터마이징
				       }          //투명png이미지
				       ]		
		};
		
		var panel = Ext.create('Ext.Panel',{  
			fullscreen:true, //Ext.Viewport.add(panel) 대신사용가능    
			items:[item1]			
		});
	}
});