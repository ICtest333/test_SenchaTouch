Ext.application({
	name:'MyApp',
	//뷰포트(Viewport)를 생성하는 코드 작성
	//뷰포트는 브라우저 화면을 가득 채우는 컨테이너 컴포넌트를 의미함
	//자동생성되는 Viewport 크기는 width, height 100%
	launch:function(){
		var top = Ext.create('Ext.Panel',{
			//위치지정
			docked:'top',
			style:'background-color:red',
			html:'top'
		});
		var left = Ext.create('Ext.Panel',{
			//위치지정
			docked:'left',
			style:'background-color:gray',
			html:'left'
		});
		var bottom = Ext.create('Ext.Panel',{
			//위치지정
			docked:'bottom',
			style:'background-color:yellow',
			html:'bottom'
		});
		var right = Ext.create('Ext.Panel',{
			//위치지정
			docked:'right',
			style:'background-color:green',
			html:'right'
		});
		var rpptPanel = Ext.create('Ext.Panel',{
			fullscreen:true,
			items:[top,left,bottom,right],
			html:'내용이 보여짐'
		});
	}
});