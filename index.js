/*
NAME : YouSungWon
DATE : 24/05/20
Section : 인터넷설계실습
ToDo list아래에 get a idea라는 버튼을 만들어 giphy api에서 excercise라는 단어의 
키워드를 가지고 얻은 image 파일들을 화면에 나오게 하구싶습니다. 
*/
"use strict";

(function() {
  const query = 'exercise';
  const apiKey = 'WBp68pqUlQeoTkoL3oK1YeOD2irsOl0c';
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=100`;

  window.addEventListener("load", init);

  function init() {
    id("submitInfo").addEventListener("click", showMainPage);
    id("addTodo").addEventListener("click", addTodo);
    id("get-idea").addEventListener("click", makingIdea);
  }

  function showMainPage() {
    let nameValue = id("name").value;
    let ageValue = id("age").value;
    id("userInfo").classList.add("hidden");
    id("main").classList.remove("hidden");
    id("nameSpan").textContent = nameValue;
    id("ageSpan").textContent = ageValue;
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

  function makingIdea() {
    fetch(apiUrl)
      .then(resp => resp.json())
      .then(data => {
        const gifContainer = id("gifs");
        gifContainer.innerHTML = '';

        if (data.data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.data.length);
          const gif = data.data[randomIndex];
          const img = document.createElement('img');
          img.src = gif.images.fixed_height.url;
          gifContainer.appendChild(img);
        } else {
          handleError(error);
        }
      })
      .catch(error => {
        handleError(error);
      });
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
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  function handleError(err) { 
    const errorHouse = id('gifs');
    errorHouse.innerHTML = `<p>이미지 불러오기를 실패했습니다. 사유: ${err}</p>`;
  }
})();


