Ext.application({
	name:'MyApp',
	launch:function(){
	
		var formPanel = Ext.create('Ext.form.Panel',{
			items:[
			       {xtype:'textfield',name:'mid',label:'아이디'},
			       {xtype:'passwordfield',name:'mpassword',label:'비밀번호'}
			       ]
		});
		
		var loginHandler = function(button,event){
			//loadmask 생성및등록
			Ext.Viewport.setMasked({
				xtype:'loadmask',
				message:'로그인 중..'
			});
			
			formPanel.submit({ // submit()메서드 이용시, JSP파일에 "success":true, 코드 필수(내부적으로사용) !!
				url:'login.jsp',
				success:function(form,result){
					//loadmask해제
					Ext.Viewport.setMasked(false);
					
					if(result.loginResult=='success'){
						Ext.Msg.alert('알림','로그인 되었습니다.',Ext.emptyFn);
					}else if(result.loginResult=='fail'){
						Ext.Msg.alert('알림','실패: '+result.message,Ext.emptyFn);
					}
				},
				failure:function(form,result){
					//loadmask해제
					Ext.Viewport.setMasked(false);
					
					Ext.Msg.alert('알림','오류: '+result.status,Ext.emptyFn);
				}
			});
		};
		
		var navBar = Ext.create('Ext.TitleBar',{
			docked:'top',
			title:'로그인 폼',
			items:[
			       {
			    	   text:'로그인',
			    	   ui:'confirm',
			    	   align:'right',
			    	   handler:loginHandler
			       }
			       ]	
		});
		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,
			layout:'fit',
			items:[navBar,formPanel]
		});
	}
});