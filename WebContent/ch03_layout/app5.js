Ext.application({
	name:'MyApp',
	launch:function(){
		var imagePanel = Ext.create('Ext.Panel',{
			html:'<img src=image1.png>',
			scrollable:'both'
		});
		
		var rootPanel = Ext.create('Ext.Panel',{
			fullscreen:true,
			//하나의 컴포넌트를 꽉채우는 레이아웃
			layout:'fit',
			items:imagePanel
		});
	}
});