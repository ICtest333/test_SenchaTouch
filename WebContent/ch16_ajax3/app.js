Ext.application({
	name:'MyApp',
	launch:function(){	
		/*var eventHandler = function(){};
		function displayPhoneList(phoneArray){}		
		var toolbar = Ext.create('Ext.Toolbar',{});		
		var listPanel = Ext.create('Ext.Panel');		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,
			items:[toolbar,listPanel]
		});*/
				
		var eventHandler = function(button,event){
			Ext.Viewport.setMasked({
				xtype:'loadmask',
				message:'로드 중...'
			});
			
			Ext.Ajax.request({
				url:'json_data.jsp',
				dataType:'json',
				success:function(response,options){
					Ext.Viewport.setMasked(false); // 로드마스크해제
					
					var phoneArray = Ext.JSON.decode(response.responseText,true);
					                                                      //true:JSON데이터오류시예외던짐
					if(phoneArray!=null){
						displayPhoneList(phoneArray);
					}
				},
				failure:function(response,options){
					Ext.Viewport.setMasked(false); // 로드마스크해제
					Ext.Msg.alert('알림','실패: '+response.status,Ext.emptyFn);
				}
			});
		};
		
		function displayPhoneList(phoneArray){
			//초기화
			listPanel.removeAll(true);
			
			for(var i=0;i<phoneArray.length;i++){
				var phone = phoneArray[i];
				var pno = phone.pno;
				var pname = phone.pname;
				var pimage = phone.pimage;
				
				var item = {
					html:'<table style=width:100%;border:1px;border-bottom-style:solid;>' +
					'<tr>'+
					'<td style=width:50px;padding:5px>'+pno+'</td>'+
					'<td style=padding-left:5px>'+pname+'</td>'+
					'<td style=text-align:right;padding:5px>'+
					'<img style=width:30px;height:50px; src='+pimage+' border=0>'+
					'</td>'+
					'</tr>'+
					'</table>'
				};
				
				listPanel.add(item); // 패널에 자식패널을 붙여서 리스트처럼 만듬
			}			
		}
		
		var toolbar = Ext.create('Ext.Toolbar',{
			docked:'top',
			items:{
				text:'Ajax-JSON 통신',
				ui:'confirm',
				handler:eventHandler
			}
		});
		
		var listPanel = Ext.create('Ext.Panel');
		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,
			items:[toolbar,listPanel]
		});
	}
});