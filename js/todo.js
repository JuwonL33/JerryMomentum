const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");      // == document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];                           // 새로고침을 할 때마다 toDos가 항상 비어있기 때문

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);                    // localStorage에는 오로지 string만 집어넣을 수 있음
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);                     // (item) => painToDo(item) 해줄 필요 없음
                                                        // painToDo는 text를 받는데 이 일을 js가 해주기 때문 
    // Arrow Function => 아래의 function과 완전 똑같음. Function의 Short Cut이라고 생각하면 됨
    /*
     * function sayHello(item){
     * console.log("this is the time to the ", item);
     *  }
     */
}