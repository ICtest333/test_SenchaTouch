Ext.application({
	name:'MyApp',
	launch:function(){
		//오버레이(팝업)용 툴바		
		var overlayToolbar = Ext.create('Ext.Toolbar',{
			docked:'top',
			title:'Overlay',
			items:[
			       {xtype:'spacer'},
			       {
			    	   text:'닫기',
			    	   ui:'decline-round',
			    	   handler:function(btn,event){
			    		   overlay.hide(); // 가운데쩜!
			    	   }
			       }
			       ]
		});
		
		//오버레이용 패널 생성
		var overlay = Ext.create('Ext.Panel',{
			//오버레이를 띄울수있는지 여부
			floating:true,
			//모달여부지정
			modal:true,//부모패널을 탭할수없게할경우
			//부모패널을 탭할수있는지여부
			hideOnMaskTap:false,//팝업띄운경우부모영역(바탕)탭할수없게
			//숨김기본지정
			hidden:true,
			width:400,
			height:400,
			//스크롤여부
			scrollable:true,
			scroll:'vertical',
			items:overlayToolbar,
			contentEl:'overlayid'
		});
		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,
			items:[
			       {
			    	   docked:'top',
			    	   xtype:'toolbar', // xtype !! ㅠㅠ
			    	   items:[
			    	          {
			    	        	  text:'버튼 Overlay 보여주기',
			    	        	  handler:function(btn,event){
			    	        		  overlay.setCentered(false);
			    	        		  overlayToolbar.setTitle('버튼에 위치한 Overlay');//
			    	        		  overlay.showBy(btn);//버튼밑에보여지게..
			    	        	  }
			    	          },
			    	          {xtype:'spacer'},
			    	          {
			    	        	  text:'가운데 Overlay 보여주기',
			    	        	  handler:function(btn,event){
			    	        		  overlay.setCentered(true);
			    	        		  overlayToolbar.setTitle('가운데 위치한 Overlay');
			    	        		  Ext.Viewport.add(overlay);//중앙에보여줄때..
			    	        		  overlay.show();//중앙에보여줄때..(화면을줄이면UI어색해짐)
			    	        	  }
			    	          }
			    	          ]//inner items
			       }
			       ], //outer items
			       html:'Overlay를 보여주는 예제입니다.'
		});
	}
});