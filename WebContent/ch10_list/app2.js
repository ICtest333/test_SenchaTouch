Ext.application({
	name:'MyApp',
	launch:function(){
				
		//모델 정의
		Ext.define('Contact',{
			extend:'Ext.data.Model',
			config:{
				fields:['firstName','lastName','tel','email']
			}
		});
		
		//데이터저장소
		var contactStore = Ext.create('Ext.data.Store',{
			model:'Contact',
			data:[
			      {firstName:'말짜',lastName:'강',tel:'010-1234-1231',email:'user1@naver.com'},
			      {firstName:'태희',lastName:'김',tel:'010-1235-1232',email:'user2@naver.com'},
			      {firstName:'혜교',lastName:'송',tel:'010-1236-1233',email:'user3@naver.com'},
			      {firstName:'송희',lastName:'천',tel:'010-1237-1234',email:'user4@naver.com'},
			      {firstName:'순자',lastName:'박',tel:'010-1238-1235',email:'user5@naver.com'},
			      {firstName:'유나',lastName:'김',tel:'010-1239-1236',email:'user6@naver.com'},
			      {firstName:'춘자',lastName:'나',tel:'010-1233-1237',email:'user7@naver.com'}
			      ]
		});
		
		var contactList = Ext.create('Ext.dataview.List',{
			store:contactStore,
			itemTpl:'<div>{lastName} {firstName}</div>',
			listeners:{
				//리스트를 클릭할때
				itemtap:function(list,index,item,e){
					var model = contactStore.getAt(index);
					navBar.setTitle('상세보기');
					btnPrev.show();//버튼보이기
					detailView.setData(model.data);
					rootPanel.setActiveItem(detailView);//detail => list 목록으로 전환
				}
			}
		});
		
		//화면 이동 효과를 주기위한 Panel 등록, card 레이아웃을 이용해 화면등록
		var detailView = Ext.create('Ext.Panel',{
			//스토어의 데이터를 표시
			tpl:[
			     '<div style="width:100%;padding:10px;">',
			     '이름: {lastName} {firstName} <hr>', // <hr> : 수평선
			     '전화번호: {tel} <hr>',
			     '이메일: {email}',
			     '</div>'
			     ]
		});
		
		//Button객체를 먼저 생성하고 TitleBar에 등록
		var btnPrev = Ext.create('Ext.Button',{
			text:'이전',
			ui:'back',
			align:'left',
			hidden:true, //기본값 버튼 숨기기
			handler:function(btn,event){
				navBar.setTitle('연락처 목록');
				btnPrev.hide();//버튼숨기기
				rootPanel.setActiveItem(contactList);
			}
		});
		
		var navBar = Ext.create('Ext.TitleBar',{
			docked:'top',
			ui:'light',
			title:'연락처 목록',
			items:[btnPrev]
		});
		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,
			layout:'card', //패널중첩시켜놓은후 상세페이지로 화면전환효과 구현키위함!!
			items:[navBar,contactList]			
		});
	}
});