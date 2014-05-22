Ext.application({
	name:'MyApp',
	launch:function(){
		var btn1 = Ext.create('Ext.Button',{text:'버튼1'});
		var btn2 = Ext.create('Ext.Button',{text:'버튼2'});
		var btn3 = Ext.create('Ext.Button',{text:'버튼3'});
/*
layout의 type 속성
auto : 타입을 지정하지 않을 경우 사용되는 기본값이며 컴포넌트에 따라 자동으로 배치가 결정됨
vbox : 위에서 아래, 즉 수직방향으로 아이템을 배치함
hbox : 좌에서 우, 즉 수평방향으로 아이템을 배치함
fit : 한 아이템으로 패널을 가득채움
card : 여러개의 아이템을 한번에 하나씩 나타나게함

layout의 align 속성 : start, center, end, stretch(수평/수직으로 늘리기)
layout의 pack 속성 : start, center, end, justify(위/아래 분배, 좌/우 분배)

*/		
		var rootPanel = Ext.create('Ext.Panel',{
			fullscreen:true,
			layout:{type:'vbox',align:'center',pack:'justify'},
			items:[btn1,btn2,btn3]
		});
	}
});