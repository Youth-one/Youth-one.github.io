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
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=10`;

  window.addEventListener("load", init);

  function init() {
    id("submitInfo").addEventListener("click", showMainPage);
    id("addTodo").addEventListener("click", addTodo);
    id("get-idea").addEventListener("click",makingIdea);
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
  function makingIdea() {
    fetch(apiUrl)
      .then(resp => resp.json())
      .then(data => {
        const gifimages = id("gifs");
        gifimages.innerHTML = '';

        data.data.forEach(gif => {
          const img = document.createElement('img');
          img.src = gif.images.fixed_height.url;
          gifimages.appendChild(img); 
        });
      })
      .catch(error => {
        console.error('Error fetching GIFs:', error);
        const gifContainer = document.getElementById('gifs');
        gifContainer.innerHTML = '<p>GIF를 가져오는 중 오류가 발생했습니다. 다시 시도해 주세요.</p>';
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
    console.log(err);
  }

})();