<%@ page language="java" contentType="text/palin; charset=UTF-8"
    pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%
//테스트 용도로 시간을 지연시킴(원격환경비슷하게)
Thread.sleep(3000);

int x = Integer.parseInt(request.getParameter("x"));
int y = Integer.parseInt(request.getParameter("y"));

int result = x*y;
%>
<%= result %>