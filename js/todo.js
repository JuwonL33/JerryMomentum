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
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();                          // 아이템을 삭제한 뒤 리스트를 업데이트 하기
}


function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
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
    const newTodoObj = {
        text:newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);                    // localStorage에는 오로지 string만 집어넣을 수 있음
    paintToDo(newTodoObj);
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


/*
 * array에서 뭔가를 remove 한다는 것은
 * 뭔갈 삭제하는게 아니라, 제거 하고자 하는 아이템을 빼고 새로운 array를 만든다는 의미
 */ 
function sexyFilter(){

}

/*
 * filter 함수는 반드시 true를 리턴해야함. 
 * filter 함수를 태운 리스트를 그대로 유지하고 싶다면 반드시 true를 리턴해야 함. 
 */