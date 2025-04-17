console.log('Welcome to the ToDo List!');

//DOM for input
const createTask = document.querySelector('#createTask');
//DOM for add button
const addBtn = document.querySelector('#addBtn');
//DOM for il container
const liContainer = document.querySelector('.li-container');
//DOM for headerDiv
const header = document.querySelector('.headerDiv');
//DOM for content-container
const contentContainer = document.querySelector('.content-container')

//Events listener for add button
addBtn.addEventListener("click",addToDo)

function addToDo(){
    const task = createTask.value; //grabs the value from the input
    const todoContainer = document.createElement('div');
/*
//setting the todo-container to be flex (column)
    todoContainer.style.display = 'flex';
    todoContainer.style.flexDirection = 'column';
    todoContainer.style.alignItems = 'center'; 
    */

//setting the li-container to be flex column
    liContainer.style.display = 'flex';
    liContainer.style.flexDirection = 'column';

//setting the todo-container to be flex row
    todoContainer.style.display = 'flex';
    todoContainer.style.flexDirection = 'row';
// create the checkbox div and style it
    const checkboxContainer = document.createElement('div');
    checkboxContainer.style.backgroundColor = 'whitesmoke';
    checkboxContainer.style.border = '2px solid black';
    checkboxContainer.style.borderRadius = '8px';
    checkboxContainer.style.padding = '5px';
    checkboxContainer.innerHTML = 
    `
    <input type="checkbox" id="taskCheck"/>
    `;
    checkboxContainer.style.marginRight = '5px';

    const createLi = document.createElement('div'); 
    createLi.classList.add('.createdTask');
    createLi.innerHTML = 
    `
        <li>${task}</li>
    `;
    //add styling
    createLi.style.backgroundColor = 'whitesmoke';
    createLi.style.listStyle = 'none';
    createLi.style.border = '2px solid black';
    createLi.style.borderRadius = '8px';
    createLi.style.display = 'flex';
    createLi.style.flexDirection = 'row';
    createLi.style.textAlign = 'center';

    todoContainer.append(checkboxContainer);
    todoContainer.append(createLi);

    liContainer.append(todoContainer);
    
    //DOM for Done button
    // ---
    const completeTask =  checkboxContainer.querySelector("#taskCheck");
    completeTask.addEventListener('change', toggleDone);

    function toggleDone(){
        const text = createLi.querySelector("li");
        
        if(this.checked){
            text.style.backgroundColor = 'green';
        }

        if (text.style.textDecoration === 'line-through'){
            text.style.textDecoration = "none";
        } else {
            text.style.textDecoration = 'line-through'
            console.log('Task Done!');
        }
    }

}