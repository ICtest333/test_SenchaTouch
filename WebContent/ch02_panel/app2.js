Ext.application({
	name:'MyApp',
	//뷰포트(Viewport)를 생성하는 코드 작성
	//뷰포트는 브라우저 화면을 가득 채우는 컨테이너 컴포넌트를 의미함
	//자동생성되는 Viewport 크기는 width, height 100%
	launch:function(){
		var top = Ext.create('Ext.Panel',{
			//위치지정
			docked:'top',
			style:'background-color:blue;font-size:40px',
			html:'TOP'
		});
		var bottom = Ext.create('Ext.Panel',{
			docked:'bottom',
			style:'background-color:green;font-size:40px',
			html:'<font color="yellow">BOTTOM</font>'
		});
		var panel = Ext.create('Ext.Panel',{ /* Ext !! */  
			fullscreen:true, //Ext.Viewport.add(panel) 대신사용가능
			items:[top,bottom],
			html:'Panel 바탕입니다. <br>이곳에 글자가 쓰여집니다.'+
			     '<br><font color="red">이제 시작해볼까요?</font>'+
			     '<br><br><br><div align="center">'+
			     '<img src="user.png" width="60" height="60"></div>'
		});
	}
});