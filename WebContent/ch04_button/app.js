Ext.application({
	name:'MyApp',
	launch:function(){
/*
Button의 속성
text : 버튼의 글자
ui : 버튼의 모양과 색상 등의 스타일
	 (round, small, decline, decline-round, decline-small,
	 confirm, confirm-round, confirm-small,
	 action, action-round, action-small, back, forward

iconCls : 아이콘 종류를 지정하는 CSS클래스
		(action, add, arrow_up, arrow_right, arrow_down, arrow_left, 
		compose, delete, refresh, reply, search, star, trash, bookmarks,
		download, favorites, info, more, settings, team, time, user,
		home, locate)
iconMask : 아이콘 표시여부
iconAlign : 아이콘 정렬(left/right)
badgeText : 뱃지를 추가(읽지않은 메시지 갯수 표시 등에 활용)
handler : 버튼의 이벤트핸들러
*/		            // {} == Ext.create() : 객체생성
		var item1 = {
				//xtype:'panel', //객체타입을 panel로 지정, Panel객체의 부모객체가 Panel일경우는 xtype지정생략가능(부모타입자동승계)
				layout:'hbox',
				items:[                  //normal:회색                   //나오는화살표
				       {xtype:'button',ui:'normal',text:'normal',iconCls:'action',iconMask:true,
				    	   handler:function(){ // (btn,event)인자사용안할시생략가능
				    		   //경고창
				    		   Ext.Msg.alert('Message','Hi~~~',Ext.empthFn);//Ext.empthFn =>경고창에 펑션연결안할시
				    	   }},
				       {xtype:'button',ui:'round',text:'round'},
				       {xtype:'button',ui:'small',text:'small'}
				       ]
		}; 

		var item2 = {
			layout:'hbox',
			items:[                 //decline: 붉은색                 //집모양
			       {xtype:'button',ui:'decline',text:'decline',iconCls:'home',iconMask:true},
			       {xtype:'button',ui:'decline-round',text:'decline-round'},
			       {xtype:'button',ui:'decline-small',text:'decline-small'}
			       ]		
		};		
		
		var item3 = {
				layout:'hbox',
				items:[                //confirm: 연두색                   //마커                //안읽은msg표시(2)
				       {xtype:'button',ui:'confirm',text:'decline',iconCls:'locate',iconMask:true, badgeText:'2'},
				       {xtype:'button',ui:'confirm-round',text:'confirm-round'},
				       {xtype:'button',ui:'confirm-small',text:'confirm-small'}
				       ]		
			};	
		
		var item4 = {
				layout:'hbox',
				items:[                //action: 하늘색                   //별모양
				       {xtype:'button',ui:'action',text:'decline',iconCls:'favorites',iconMask:true},
				       {xtype:'button',ui:'action-round',text:'action-round'},
				       {xtype:'button',ui:'action-small',text:'action-small'}
				       ]		
			};	
		
		var panel = Ext.create('Ext.Panel',{  
			fullscreen:true, //Ext.Viewport.add(panel) 대신사용가능
			layout:{type:'vbox',align:'center',pack:'justify'},      
			items:[item1,item2,item3,item4]			
		});
	}
});