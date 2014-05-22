Ext.application({
	name:'MyApp',
	launch:function(){
		
		//버튼그룹
		var segmentedButton1 = Ext.create('Ext.SegmentedButton',{
			//버튼복수선택여부
			allowMultiple:false, //토글(이벤트)=>on만 가능
			//pressed:true => 선택된 형태로 초기화
			items:[
			       {text:'Button1',ui:'decline',pressed:true},
			       {text:'Button2',ui:'decline'},
			       {text:'Button3',ui:'decline'}
			       ],
			listeners:{
				toggle:function(segmentedButton,button,pressed){
					Ext.Msg.alert('알림',button.getText() + ':' + (pressed?'on':'off'),Ext.emptyFn);
				}
			}
		});
		
		var segmentedButton2 = {
				xtype:'segmentedbutton',
				allowMultiple:true, //토글(이벤트)=>on/off가능
				items:[
				       {text:'Button4',ui:'confirm',iconCls:'locate',iconMask:true},
				       {text:'Button5',ui:'confirm',iconCls:'settings',iconMask:true}
				       ],
				listeners:{
					toggle:function(segmentedButton,button,pressed){
						Ext.Msg.alert('알림',button.getText() + ':' + (pressed?'on':'off'),Ext.emptyFn);
					}
				}
		};
		
		var toolbar = {
				xtype:'toolbar',
				docked:'top',
				title:'버튼그룹',
				items:[segmentedButton1]
		};
		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true, //Ext.Viewport.add(panel) 대신사용가능    
			layout:{type:'vbox',align:'center',pack:'center'},
			items:[toolbar,segmentedButton2]			
		});
	}
});