/*
NAME : YouSungWon
DATE : 24/04/30
Section : 인터넷설계실습
처음사이트에 접속을하면 성함 , 남/여 여부를 체크하고 다음 페이지로 넘어가며
운동한 경력을 물어보고 상태를 저장하고 자기의 몸무게 체중 골격근량 체지방률 등을 저장하여
그래프로 나타내어 시간에(날짜)의 변화에 따라 자기 몸의 상태를 한눈에 확인할수있는 페이지도 구현하고싶습니다.
*/
"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {
    id("submitInfo").addEventListener("click", showMainPage);
    id("addTodo").addEventListener("click", addTodo);
  }

  function showMainPage() {
    let nameValue = id("name").value;
    let ageValue = id("age").value;
    id("userInfo").classList.add("hidden");
    id("main").classList.remove("hidden");
    const nameSpan = document.getElementById('nameSpan');
    const ageSpan = document.getElementById('ageSpan');
    nameSpan.textContent = nameValue;
    ageSpan.textContent = ageValue;
  }
  function addTodo() {
    let todoInput = id("todoInput").value;
        if (todoInput.trim() !== "") {
            let todoList = id("todoList");
            let todoItem = document.createElement("li");
            todoItem.textContent = todoInput;
            todoList.appendChild(todoItem);
            id("todoInput").value = ""; 
        }
  }

  function id(name) {
    return document.getElementById(name);
  }

  function qs(query) {
    return document.querySelector(query);
  }

  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();