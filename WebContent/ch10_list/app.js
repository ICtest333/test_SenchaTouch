Ext.application({
	name:'MyApp',
	launch:function(){
				
		//객체정의 (cf.안드로이드Adapter)
		Ext.define('company',{ // company : 객체명
			extend:'Ext.data.Model', //상속
			config:{ //속성부여
				//리스트에 바인딩될 데이터의 모델(Adapter유사) 정의
				fields:['company_grade','company_class','name'] //key값 정의 => 모델 (DB 컬럼명처럼)
			}
		});
		
		//데이터저장소
		var companyStore = Ext.create('Ext.data.Store',{
			model:'company',//모델등록
			sorters:{//정렬
				property:'company_class',//부서기준
				direction:'desc'//내림차순
			},
			//실제 데이터를 정의하는 영역
			data:[//데이터매칭(배열)
			      {company_grade:'차장',company_class:'영업부',name:'홍길동'},
			      {company_grade:'차장',company_class:'총무부',name:'박문수'},
			      {company_grade:'과장',company_class:'영업부',name:'장영실'},
			      {company_grade:'과장',company_class:'총무부',name:'손오공'},
			      {company_grade:'대리',company_class:'영업부',name:'저팔계'},
			      {company_grade:'대리',company_class:'인사과',name:'강호동'},
			      {company_grade:'사원',company_class:'인사과',name:'유재석'},
			      {company_grade:'사원',company_class:'홍보부',name:'김병만'},
			      {company_grade:'사원',company_class:'홍보부',name:'김순신'}
			      ]
		});
		
		var companyList = Ext.create('Ext.dataview.List',{
			flex:1,
			//리스트에 바인딩되도록 store 정보 지정
			store:companyStore,
			
			//리스트에 데이터가 표시되는 방식, 즉 템플릿을 설정
			itemTpl:'<div>직급:{company_grade} 부서:{company_class} 이름:<b>{name}</b></div>',//리스트항목
			                 //중괄호{key값}=>데이터읽어옴
			
			//아이콘 클릭시 이벤트 처리 : 아이콘을 정확히 클릭해야 반응함(다소불편)
			onItemDisclosure:{
				//record: 탭한 리스트항목을 만들때 사용한 Model객체정보
				//btn: Ext.Element 객체 (icon의 부모객체)
				//index: 탭한 리스트 항목 인덱스 번호, 첫 항목의 인덱스번호는 0.
				// e : 이벤트 정보를 갖는 탭 이벤트 객체
				handler:function(record,btn,index,e){
					alert('직급: '+record.get('company_grade') + ', 부서: '+record.get('company_class')+', 이름: '+record.get('name'));
				}
			}//,
			
			//아이콘표시
			//onItemDisclosure:true,
			/*listeners:{
				//리스트를 한번 클릭할때 이벤트
				itemtap:function(list,index,item){
					Ext.Msg.alert('안내','선택은 '+
							'직급: '+ companyStore.data.items[index].data.company_grade + 
							', 부서: '+ companyStore.data.items[index].data.company_class +
							', '+ companyStore.data.items[index].data.name);
				}
			}*/
		});
		
		var rootPanel = Ext.create('Ext.Panel',{  
			fullscreen:true,
			layout:{
				type:'vbox',
				align:'stretch'
				},
			items:[companyList]			
		});
	}
});