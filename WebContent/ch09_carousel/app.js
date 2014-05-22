Ext.application({
	name:'MyApp',
	launch:function(){
				
		var carousel = Ext.create('Ext.Carousel',{
			direction: 'vertical', //'horizontal', //종/횡으로 회전(컨베이어벨트)/롤링 되드시 화면전환효과
			indicator:true,
			items:[
			       {
			    	   title:'Tab1',
			    	   html:'<div align=center><img src=Koala.jpg width=200 height=150><br><br>코알라</div>'
			       },
			       {
			    	   title:'Tab2',
			    	   html:'<div align=center><img src=Lighthouse.jpg width=200 height=150><br><br>등대</div>'
			       },
			       {
			    	   title:'Tab3',
			    	   html:'<div align=center><img src=Penguins.jpg width=200 height=150><br><br>펭귄</div>'
			       }
			       ]
		});
		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,
			layout:{type:'vbox',align:'stretch',pack:'center'},
			defaults:{
				flex:1
			},
			items:[carousel]			
		});
	}
});