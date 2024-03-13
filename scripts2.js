const todoList =[{
    name:'make dinner',
    dueDate:'2022-12-22'

},
{
    name:'MAke a Website',
    dueDate:'2022-12-22'

}]
renderTodoList();
function renderTodoList(){
let todoListHTML ='';

for(let i =0; i<todoList.length; i++){
    const todoObject = todoList[i];
    const {name,dueDate} = todoObject;   //Detructring
    const html = `<p>${name} ${dueDate} <button
    onclick="todoList.splice(${i},1);
    renderTodoList();

    "
    >Remove</button></p>`;
    console.log(html)
    todoListHTML += html;
}

console.log(todoListHTML);
document.querySelector('#js-todo-list').innerHTML =todoListHTML;
}
function addItem(){
 const inputElement = document.querySelector(".js-input-task1");
 const name = inputElement.value;
 const dateELement = document.querySelector('.js-date-task1');

 const dueDate = dateELement.value;
 const add = {
    name,
    dueDate
 }
 todoList.push(add);
 console.log(add);
 
 inputElement.value ='';
 renderTodoList();
}