Ext.application({
	name:'MyApp',
	launch:function(){
		
		var formPanel = Ext.create('Ext.form.Panel',{
			items:[
			       {
			    	   xtype:'fieldset',
			    	   title:'입사지원서',
			    	   instructions:'각 항목을 적어서 인사과에 제출하세요.',
			    	   defaults:{
			    		   required:true, // ui적으로만 필수로 보여지라는 의미(유효성체크는아님)
			    		   labelAlign:'left'
			    	   },
			    	   items:[//'fieldset'의 자식
			    	          {
			    	        	  xtype:'textfield',
				    	          name:'name',
				    	          id:'name',
				    	          label:'이름',
				    	          clearIcon:true  
			    	          },
			    	          {
			    	        	  xtype:'datepickerfield',
			    	        	  //실제월은 입력월+1로 표시해줌(내부적으론 0~11월로 인식)
			    	        	  value:new Date(2014,4,22), // 실제는, mm월dd일yyyy년 순으로 표시됨
			    	        	  picker:{
			    	        		  yearFrom:1950,
			    	        		  yearTo:2030,
			    	        		  slotOrder:['year','month','day']
			    	        	  },
			    	        	  name:'birthday',
			    	        	  id:'birthday',
			    	        	  label:'생년월일'
			    	          },
			    	          {
			    	        	  xtype:'checkboxfield',
			    	        	  name:'mili',
			    	        	  id:'mili',
			    	        	  label:'군필여부',
			    	        	  //체크하면 전달되는 값지정
			    	        	  value:true,
			    	        	  checked:true
			    	          },
			    	          {
			    	        	  xtype:'spinnerfield',
			    	        	  name:'spinner',
			    	        	  id:'sppiner',
			    	        	  increment:1, //0.1단위로증가(오작동)
			    	        	  maxValue:60,
			    	        	  minValue:0,
			    	        	  label:'경력'
			    	          },
			    	          {
			    	        	  xtype:'selectfield',
			    	        	  name:'malefemale',
			    	        	  id:'malefemale',
			    	        	  label:'성별',
			    	        	  options:[
			    	        	           {text:'남자',value:'1'},//보여지는text,전송value
			    	        	           {text:'여자',value:'2'}
			    	        	           ]
			    	          },
			    	          {
			    	        	  xtype:'numberfield',
			    	        	  id:'age',
			    	        	  name:'age',
			    	        	  label:'나이',
			    	        	  value:20
			    	          },
			    	          {
			    	        	  xtype:'emailfield',
			    	        	  name:'email',
			    	        	  id:'email',
			    	        	  label:'이메일',
			    	        	  placeHolder:'test@test.com',
			    	        	  clearIcon:true
			    	          },
			    	          {
			    	        	  xtype:'urlfield',
			    	        	  name:'url',
			    	        	  id:'url',
			    	        	  label:'홈페이지',
			    	        	  placeHolder:'http://www.test.com',
			    	        	  clearIcon:true
			    	          },
			    	          {
			    	        	  xtype:'sliderfield',
			    	        	  name:'moneyslider',
			    	        	  value:0,
			    	        	  maxValue:10000,
			    	        	  minValue:0,
			    	        	  label:'희망연봉',
			    	        	  listeners:{ //전체슬라이더필드,슬라이더,둥근썸,새값,예전값
			    	        		  change:function(me,slider,thumb,newValue,oldValue){
			    	        			            //money: id를 이용해 아래 객체 참조 => 슬라이더 움직임에 해당값(change) 표시
			    	        			  Ext.getCmp('money').setValue(newValue)
			    	        		  }
			    	        	  }
			    	          },
			    	          {
			    	        	  xtype:'numberfield',
			    	        	  id:'money',
			    	        	  name:'money',
			    	        	  label:'희망연봉값',
			    	        	  value:0,
			    	        	  clearIcon:false,
			    	        	  readOnly:true
			    	          },
			    	          {
			    	        	  xtype:'textareafield',
			    	        	  label:'자기소개',
			    	        	  maxRow:4,
			    	        	  name:'content'
			    	          },
			    	          {
			    	        	  layout:{type:'hbox',pack:'center'},
			    	        	  items:[
			    	        	         {
			    	        	        	 xtype:'button',
			    	        	        	 width:100,
			    	        	        	 text:'등록',
			    	        	        	 handler:function(){
			    	        	        		 alert('등록합니다.');
			    	        	        		 var loadValues = formPanel.getValues();
			    	        	        		 console.log('name : ' + loadValues.name);//name속성
			    	        	        		 //console.log('name : ' + Ext.getCmp('name').getValues());//name속성
			    	        	        	 }
			    	        	         },
			    	        	         {
			    	        	        	 xtype:'spacer',
			    	        	        	 width:'10%'
			    	        	         },
			    	        	         {
			    	        	        	 xtype:'button',
			    	        	        	 width:100,
			    	        	        	 text:'취소',
			    	        	        	 handler:function(){
			    	        	        		 alert('취소합니다.');
			    	        	        		 formPanel.reset();
			    	        	        	 }
			    	        	         }
			    	        	         ]
			    	          }
			    	          ]			    		   
			       }
			       ]			
		});
		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,
			layout:'fit',
			items:[formPanel]			
		});
	}
});