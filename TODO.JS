const todoList = [{
    name:'make dinner', 
    dueDate:'2022-12-22'
}, {
    name:'wash dishes',
    dueDate:'2022-12-24'}];



renderTodoList()


function renderTodoList() {
    let todoListHTML = '';
    todoList.forEach((todoObject, index) =>{
        const {name, dueDate} = todoObject
        const html =
        `<div>
            ${name}
        </div>
        <div>
            ${dueDate}
        </div>
        <button class = "delete-todo-button" onclick = "todoList.splice(${index},1);
        renderTodoList();
        ">Delete</button>`
        todoListHTML += html;
        document.querySelector('.js-todo-list').innerHTML = (todoListHTML)
    })
    
}


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const  name  = inputElement.value
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value
    todoList.push({name , dueDate})
    inputElement.value = ''
    renderTodoList()
}


let header = document.querySelector(".header")
let heading = "BANTIN'S TODO LIST"
let i = 0;
setInterval(() => {
    if (i >= heading.length) {
        clearInterval();
    } else {
        header.innerHTML += heading[i];
        i++;
    }
}, 100)