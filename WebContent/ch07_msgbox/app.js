Ext.application({
	name:'MyApp',
	launch:function(){
/*
Message 박스 용도
alert : 일반적인 정보를 표시하는 메시지 박스(OK버튼)		
confirm : 확인을 요구하는 질문 형식의 메시지 박스(Yes,No버튼)
prompt : 사용자의 입력을 요구하는 메시지 박스(OK, Cancel버튼)

메시즈박스의 매개변수

Ext.Msg.alert(타이틀,메시지,콜백함수)
타이틀 : 메시지 박스 타이틀
메시지 : 문자열
콜백함수 : 메시지 박스가 닫힐 때 실행될 함수, 특별히 콜백함수가 필요없을 경우 
           Ext.emptyFn 지정(명시필) 
*/		
		var btnAlert = Ext.create('Ext.Button',{
			text:'Alert',
			ui:'confirm',
			handler:function(){
				Ext.Msg.alert('알림','로그인되었습니다.',Ext.emptyFn);
			}
		});
		var btnConfirm = Ext.create('Ext.Button',{
			text:'Confirm',
			ui:'confirm',
			handler:function(){
				Ext.Msg.confirm('확인','정말 전송하시겠습니까?',
						function(buttonId){ // buttonId : yes or no
							if(buttonId == 'yes'){console.log('예를 눌렀군요!');}
							else{console.log('아니오를 눌렀군요!');}					
				});
			}
		});
		var btnPrompt = Ext.create('Ext.Button',{
			text:'Prompt',
			ui:'confirm',
			handler:function(){
				Ext.Msg.prompt('입력','이름을 입력하세요',
						function(buttonId,value){//buttonId : ok or cancel // value: 입력한 데이터***
							if(buttonId == 'ok'){console.log('입력한 내용 : ' + value);}
				});
			}
		});
		
		var toolBar = Ext.create('Ext.Toolbar',{
			docked:'top',
			items:[btnAlert,btnConfirm,btnPrompt]
		});
		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,       
			items:[toolBar]			
		});
	}
});