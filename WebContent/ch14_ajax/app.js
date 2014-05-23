Ext.application({
	name:'MyApp',
	launch:function(){
	
		var eventHandler = function(button,event){
			var xValue = Ext.getCmp('x').getValue();
			var yValue = Ext.getCmp('y').getValue();
			
			//loadmask 생성 및 등록
			Ext.Viewport.setMasked({
				xtype:'loadmask',
				message:'계산중...'
			});
			
			//비동기통신
			Ext.Ajax.request({
				url:'calculator.jsp',
				params:{x:xValue,y:yValue},
				success:function(response){
					//loadmask해제
					Ext.Viewport.setMasked(false);
					
					Ext.Msg.alert('알림','계산결과: '+response.responseText,Ext.emptyFn);
				},
				failure:function(response){
					//loadmask해제
					Ext.Viewport.setMasked(false);
					
					Ext.Msg.alert('알림','오류: '+response.status,Ext.emptyFn);
				}
			});
		};
				
		var toolbar = Ext.create('Ext.Toolbar',{
			docked:'top',
			items:[
			       {
			    	   text:'계산하기',
			    	   ui:'confirm',
			    	   handler:eventHandler //위에서, 별도function으로 구현 패턴
			       }
			       ]
		});
		var formPanel = Ext.create('Ext.form.Panel',{
			items:[
			       {id:'x',xtype:'textfield',name:'x',label:'x'},
			       {id:'y',xtype:'textfield',name:'y',label:'y'}
			       ]
		});
		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,
			layout:'fit',
			items:[toolbar,formPanel]
		});
	}
});