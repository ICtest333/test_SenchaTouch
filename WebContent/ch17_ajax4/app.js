Ext.application({
	name:'MyApp',
	launch:function(){	
		/*패널에 자식패널을 붙인 리스트 형식
		var eventHandler = function(){var eventHandler
		                              = function(button,event){Ext.Ajax.request({url:,dataType:,success:,failure:})}};
		function displayPhoneList(phoneArray){ for ... listPanel.add(item);}		
		var toolbar = Ext.create('Ext.Toolbar',{});		
		var listPanel = Ext.create('Ext.Panel');		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,
			items:[toolbar,listPanel]
		});*/
			
        /*
        Ext.define('phone',{extend:,});		
		var phoneStore = Ext.create('Ext.data.Store',{});		
		var phoneList = Ext.create('Ext.dataview.List',{});		
		var navBar = Ext.create('Ext.TitleBar',{});		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,
			layout:'fit',
			items:[navBar,phoneList]
		});*/
		
		Ext.define('phone',{
			extend:'Ext.data.Model',
			config:{
				fields:['pno','pname','pimage']
			}
		});
		
		var phoneStore = Ext.create('Ext.data.Store',{
			model:'phone',
			proxy:{
				type:'ajax',
				url:'json_data.jsp',
				reader:{
					type:'json',
					rootProperty:'data'//생략가능,생략시 [{},{}]형식으로 JSON파일구성필
				}
			},
			autoLoad:true
		});
		
		var phoneList = Ext.create('Ext.dataview.List',{
			store:phoneStore,
			masked:{
				xtype:'loadmask',
				message:'로딩중'
			},
			itemTpl:[
			         '<div style=width:100%;>',
			         '<table style=width:100%;>',
						'<tr>',
						'<td style=width:50px;padding:5px> {pno} </td>',
						'<td style=padding-left:5px> {pname} </td>',
						'<td style=text-align:right;padding:5px>',
						'<img style=width:30px;height:50px; src= {pimage} border=0>',
						'</td>',
						'</tr>',
						'</table>',
			         '<div>'
			         ]	/*배열이므로 쉼표(,)사용, {pno}, {pname}, {pimage}형식*/		
		});
		
		var navBar = Ext.create('Ext.TitleBar',{
			docked:'top',
			title:'폰 목록 확인'
		});
		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,
			layout:'fit',
			items:[navBar,phoneList]
		});
	}
});