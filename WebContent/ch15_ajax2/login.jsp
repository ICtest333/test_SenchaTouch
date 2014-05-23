<%@ page language="java" contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%
String mid = request.getParameter("mid");
String mpassword = request.getParameter("mpassword");

String message = null;

if(mid !=null && mpassword !=null){
	if(mid.equals("user")){
		if(mpassword.equals("12345")){
			message="로그인 성공";
		}else{
			message="비밀번호 틀림";
		}
	}else{
		message="아이디가 존재하지 않음";
	}
}else{
	message="아이디와 비밀번호가 필요함";
}	

if(message.equals("로그인 성공")){
%>
	{
		"success":true, <%-- JSP호출됨 --%>
		"loginResult":"success"
	}
<%	
}else{
%>
	{
		"success":true,<%-- JSP호출됨 --%>
		"loginResult":"fail",
		"message":"<%= message %>" <%-- 로그인실패이유 --%>
	}
<%
}
%>
