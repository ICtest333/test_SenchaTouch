Ext.application({
	name:'MyApp',
	//뷰포트(Viewport)를 생성하는 코드 작성
	//뷰포트는 브라우저 화면을 가득 채우는 컨테이너 컴포넌트를 의미함
	//자동생성되는 Viewport 크기는 width, height 100%
	launch:function(){
		var panel = Ext.create('Ext.Panel',{
			style:'background-color:#00ff00',
			//html속성으로 지정하기에 복잡한 내용은 html문서의 body부분에 저장하고 id를 부여해 호출가능
			contentEl:'panelContent'
		});
		
		var rootPanel = Ext.create('Ext.Panel',{
			fullscreen:true,
			items:[panel]
		});
	}
});