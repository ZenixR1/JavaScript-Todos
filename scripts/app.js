console.log('Welcome to the ToDo List!');

//DOM for body
const body = document.querySelector('body');
//DOM for input and make sure it is empty
const createTask = document.querySelector('#createTask');
createTask.value = '';
//DOM for add button
const addBtn = document.querySelector('#addBtn');
//DOM for il container
const liContainer = document.querySelector('.li-container');
//DOM for headerDiv
const header = document.querySelector('.headerDiv');
//DOM for content-container
const contentContainer = document.querySelector('.content-container')
//DOM for input-container
const inputContainer = document.querySelector('.input-container');
//DOM for todo-container
const todoContainer = document.querySelector('.todo-container');
//DOM for control buttons
const controlButtons = document.querySelector('.control-buttons');
const sortButton = document.querySelector('#button1');
const alertButton = document.querySelector('#button2');


//styling for the body
body.style.backgroundColor = ' #1a1a1a';
//styling for header
header.style.backgroundColor = '#1a1a1a';
header.style.zIndex = '1';
header.style.boxShadow = '2px 2px 15px #a200ff';
//styling for todo container
todoContainer.style.display = 'flex';
todoContainer.style.flexDirection = 'column';
todoContainer.style.margin = '8px';
todoContainer.style.padding = '10px';
todoContainer.style.border = '2px solid black';
todoContainer.style.borderRadius = '8px';
todoContainer.style.backgroundColor ='#242424';
todoContainer.style.minWidth = '35rem'
todoContainer.style.minHeight = '8rem';
todoContainer.style.boxShadow = '5px 5px 100px #a200ff'
//setting the li-container to be flex column
liContainer.style.display = 'flex';
liContainer.style.flexDirection = 'column';
liContainer.style.padding = '0';
//styling for the input field
inputContainer.style.margin = '8px';
inputContainer.style.padding = '8px';
inputContainer.style.border = '2px solid black';
inputContainer.style.borderRadius = '8px';
inputContainer.style.alignSelf = 'center';
inputContainer.style.backgroundColor = '#242424';
inputContainer.style.transition = 'all 1s';
inputContainer.style.display = 'flex';
inputContainer.style.justifyContent = 'center';
inputContainer.style.boxShadow = '2px 2px 10px #a200ff';
inputContainer.style.zIndex = '1';

//styling for content-container
contentContainer.style.position = 'relative';

//styling for control buttons container
controlButtons.style.position = 'absolute';
controlButtons.style.top = '0.6rem';
controlButtons.style.right = '2rem';
controlButtons.style.display = 'flex';
controlButtons.style.flexDirection = 'column';
controlButtons.style.gap = '5px';
controlButtons.style.zIndex = '2';

//styling for sort button
sortButton.style.width = '30px';
sortButton.style.height = '30px';
sortButton.style.backgroundColor = '#1a1a1a';
sortButton.style.border = '2px solid black';
sortButton.style.borderRadius = '8px';
sortButton.style.boxShadow = '2px 2px 40px #a200ff';
sortButton.style.cursor = 'pointer';
sortButton.style.display = 'flex';
sortButton.style.justifyContent = 'center';
sortButton.style.alignItems = 'center';
sortButton.style.transition = 'all 0.3s';
sortButton.innerHTML = '<i class="fa-solid fa-arrow-down-wide-short"></i>';
sortButton.style.color = '#ffffff';

// Add hover effect
sortButton.addEventListener('mouseover', () => {
    sortButton.style.transform = 'scale(1.1)';
});
sortButton.addEventListener('mouseout', () => {
    sortButton.style.transform = 'scale(1)';
});

//styling for alertButton
alertButton.style.width = '30px';
alertButton.style.height = '30px';
alertButton.style.backgroundColor = '#1a1a1a';
alertButton.style.border = '2px solid black';
alertButton.style.borderRadius = '8px';
alertButton.style.boxShadow = '2px 2px 40px #a200ff';
alertButton.style.cursor = 'pointer';
alertButton.style.display = 'flex';
alertButton.style.justifyContent = 'center';
alertButton.style.alignItems = 'center';
alertButton.style.transition = 'all 0.3s';
alertButton.innerHTML = '<i class="fa-solid fa-bell"></i>';
alertButton.style.color = '#ffffff';

// Add hover effect for button2
alertButton.addEventListener('mouseover', () => {
    alertButton.style.transform = 'scale(1.1)';
});
alertButton.addEventListener('mouseout', () => {
    alertButton.style.transform = 'scale(1)';
});


//Adding placeholder text to input field as well as padding.
createTask.placeholder = 'Add a task then press Enter!';
createTask.textAlign = 'center';
createTask.style.padding = '8px';
createTask.style.minWidth = '25rem';

createTask.addEventListener("keydown",function(event){
    if (event.key === "Enter"){
        addToDo();
        console.log('Task has been entered successfully');
    }
});//Events listener for add button

let todoList = [];
todoList = JSON.parse(localStorage.getItem('todoList')) || [];
if (todoList.length > 0){
    todoList.forEach(todo => {
        createTask.value = todo;
        renderTodo(todo);
    });
}

function addToDo(){
    const todo = createTask.value;
    todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    
    if (todo != ''){ //This if statement prevents an empty submission from being passed.
            renderTodo(todo);
        }
}

function renderTodo(task){
            //const task = createTask.value; //grabs the value from the input
            const todoContent = document.createElement('div');
        //setting the todo-container to be flex row
            todoContent.style.display = 'flex';
            todoContent.style.flexDirection = 'row';
            todoContent.style.margin = '2px';
        //create the div that houses the priority flag
            const priorityFlag = document.createElement('div');
            priorityFlag.style.backgroundColor = '#1a1a1a';
            priorityFlag.style.border = '2px solid black';
            priorityFlag.style.borderRadius = '8px';
            priorityFlag.style.padding = '10px';
            priorityFlag.style.width = 'max-content';
            priorityFlag.style.color = '#ffffff';
            const flag = document.createElement('svg');
            flag.classList.add('thePriorityFlag');
            flag.style.height = 'min-content';
            priorityFlag.append(flag);
            priorityFlag.style.display = 'flex';
            priorityFlag.style.justifyContent = 'center';
            priorityFlag.style.height = 'min-content';
            priorityFlag.style.alignSelf = 'center';
            priorityFlag.style.boxShadow = '2px 2px 10px #a200ff';
        // create the checkbox div and style it
            const checkboxContainer = document.createElement('div');
            checkboxContainer.style.backgroundColor = '#1a1a1a';
            checkboxContainer.style.border = '2px solid black';
            checkboxContainer.style.borderRadius = '8px';
            checkboxContainer.style.padding = '10px';
            checkboxContainer.innerHTML = 
            `
            <input type="checkbox" id="taskCheck"/>
            `;
            checkboxContainer.style.marginLeft = '5px';
            checkboxContainer.style.marginRight = '5px';
            checkboxContainer.style.display = 'flex';
            checkboxContainer.style.justifyContent = 'center';
            checkboxContainer.style.alignItems = 'center';
            checkboxContainer.style.minWidth = '32px';
            checkboxContainer.style.minHeight = '32px';
            checkboxContainer.style.boxShadow = '2px 2px 10px #a200ff';
        // create the task div which provides the task li --- lines 47-58 are additions to the createLi div.
            const createLi = document.createElement('div'); 
            createLi.classList.add('createdTaskDiv');
            createLi.innerHTML = 
            `
                <li class="createdTask">${task}</li>
            `;
            createLi.style.backgroundColor = '#1a1a1a';
            createLi.style.listStyle = 'none';
            createLi.style.border = '2px solid black';
            createLi.style.borderRadius = '8px';
            createLi.style.display = 'flex';
            createLi.style.flexDirection = 'row';
            createLi.style.textAlign = 'center';
            createLi.style.padding = '10px';
            createLi.style.minWidth = '25rem';
            createLi.style.maxWidth = '30rem';
            createLi.style.color = '#ffffff';
            createLi.style.font = 'Roboto';
            createLi.style.fontWeight = '500';
            createLi.style.alignItems = 'center';
            createLi.style.justifyContent = 'center';
            createLi.style.boxShadow = '2px 2px 10px #a200ff';
        //create the buttonDiv and style it
            const buttonDiv = document.createElement('div');
            buttonDiv.style.display = 'flex';
            buttonDiv.style.flexDirection = 'row';
            buttonDiv.style.justifyContent = 'center';
            buttonDiv.style.alignItems = 'center';
            buttonDiv.style.marginLeft = 'auto';
            buttonDiv.style.marginRight = '5px';
        //create the edit button and style it
            const editBtn = document.createElement('button');
            editBtn.style.backgroundColor = '#1a1a1a';
            editBtn.style.border = '2px solid black';
            editBtn.style.borderRadius = '8px';
            editBtn.style.padding = '10px';
            editBtn.style.color = '#ffffff';
            editBtn.style.height = '30px';
            editBtn.style.width = '30px';
            editBtn.style.marginLeft = '10px';
            editBtn.style.display = 'flex';
            editBtn.style.justifyContent = 'center';
            editBtn.style.alignItems = 'center';
            editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
            editBtn.addEventListener('click', () => {
                const taskText = createLi.querySelector('.createdTask');
                const newTask = prompt('Edit your task:', taskText.textContent);
                if (newTask !== null) {
                    taskText.textContent = newTask;
                }
            });
            buttonDiv.append(editBtn);
        //create the delete button and style it
            const deleteBtn = document.createElement('button');
            deleteBtn.style.backgroundColor = '#1a1a1a';
            deleteBtn.style.border = '2px solid black';
            deleteBtn.style.borderRadius = '8px';
            deleteBtn.style.padding = '10px';
            deleteBtn.style.color = '#ffffff';
            deleteBtn.style.height = '30px';
            deleteBtn.style.width = '30px';
            deleteBtn.style.marginLeft = '10px';
            deleteBtn.style.display = 'flex';
            deleteBtn.style.justifyContent = 'center';
            deleteBtn.style.alignItems = 'center';
            deleteBtn.style.justifySelf = 'flex-end';
            deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
            deleteBtn.addEventListener('click', () => {
                const taskText = createLi.querySelector('.createdTask');
                const confirmDelete = confirm(`Are you sure you want to delete "${taskText.textContent}"?`);
                if (confirmDelete) {
                    liContainer.removeChild(todoContent);
                    const index = todoList.indexOf(taskText.textContent);
                    if (index > -1) {
                        todoList.splice(index, 1);
                        localStorage.setItem('todoList', JSON.stringify(todoList));
                    }
                }
            });
            buttonDiv.append(deleteBtn);
            createLi.append(buttonDiv);
        //create the div and divs for the up and down arrows for priority
            const priorityToggles = document.createElement('div');
            const upPriority = document.createElement('div');
            const upArrow = document.createElement('svg');
            const downPriority = document.createElement('div');
            const downArrow = document.createElement('svg');
            upArrow.classList.add('fa-solid');
            upArrow.classList.add('fa-arrow-up');
            downArrow.classList.add('fa-solid');
            downArrow.classList.add('fa-arrow-down');
            upPriority.append(upArrow);
            downPriority.append(downArrow);
        //create styles for the up and down arrows.
            upPriority.style.background = '#1a1a1a';
            upPriority.style.border = '2px solid black';
            upPriority.style.borderRadius = '8px';
            upPriority.style.padding = '4px 2px';
            upPriority.classList.add('upThePriority');
            upPriority.style.color = '#ffffff';
            upPriority.style.marginBottom = '2px';
            upPriority.style.marginLeft = '2px';
            upPriority.style.boxShadow = '2px 2px 10px #a200ff';
            downPriority.style.background = '#1a1a1a';
            downPriority.style.border = '2px solid black';
            downPriority.style.borderRadius = '8px';
            downPriority.style.padding = '4px 2px';
            downPriority.style.marginTop = '2px';
            downPriority.classList.add('downThePriority');
            downPriority.style.color = '#ffffff';
            downPriority.style.marginLeft = '2px';
            downPriority.style.boxShadow = '2px 2px 10px #a200ff';

        //create style for PriorityToggles
            priorityToggles.style.marginLeft = '2px';
            
            priorityToggles.append(upPriority);
            priorityToggles.append(downPriority);
                //chevron-up for high, bars for medium, and chevron-down for low priority.

            todoContent.append(priorityFlag)
            todoContent.append(checkboxContainer); //These two combine the checkbox div and the task li divs. 
            todoContent.append(createLi);
            todoContent.append(priorityToggles);
            todoContent.style.zIndex = '1';
            todoContent.style.margin = '5px 0px';

        //Add hover effect to todoContent
            todoContent.addEventListener('mouseover', () => {
                todoContent.style.transform = 'scale(1.08)';
            });
            todoContent.addEventListener('mouseout', () => {
                todoContent.style.transform = 'scale(1)';
            });
            todoContent.style.transition = 'all 0.3s';

            liContainer.append(todoContent);//This adds the combined divs to the UL "li-container"
            
            createTask.value = ''; //Clear the text after submission.


            const priority = priorityFlag.querySelector('.thePriorityFlag');
            if (!priority.classList.contains('fa-chevron-up') || !priority.classList.contains('fa-chevron-down') || !priority.classList.contains('fa-bars')){
                priority.classList.add('fa-solid');
                priority.classList.add('fa-bars');
            }
        //DOM for up priority arrow
            const upPriorityArrow = todoContent.querySelector('div.upThePriority');
            upPriorityArrow.addEventListener('click', () => {                
                
                switch (true) {
                    case priority.classList.contains('fa-bars'):
                        priority.classList.remove('fa-bars');
                        priority.classList.add('fa-chevron-up');
                        break;
                    case priority.classList.contains('fa-chevron-down'):
                        priority.classList.remove('fa-chevron-down');
                        priority.classList.add('fa-bars');
                        break;
                    case priority.classList.contains('fa-chevron-up'):
                        console.log('You cannot go higher! This task is already at highest priority level!');
                        break;
                }
            });
        //DOM for down priority arrow
            const downPriorityArrow = todoContent.querySelector('div.downThePriority');
            downPriorityArrow.addEventListener('click', downTaskPriority);

            function downTaskPriority(){
                switch(true){ 
                case (priority.classList.contains('fa-bars')):
                    priority.classList.remove('fa-bars');
                    priority.classList.add('fa-chevron-down');
                    break;
                case(priority.classList.contains('fa-chevron-up')):
                    priority.classList.remove('fa-chevron-up');
                    priority.classList.add('fa-bars');
                    break;
                case(priority.classList.contains('fa-chevron-down')):
                    console.log('You cannot go lower! This task is already at lowest priority level!');
                    break;
                }
            }

        //DOM for Done button
        // ---
            const completeTask =  checkboxContainer.querySelector("#taskCheck");
            completeTask.addEventListener('change', toggleDone);

            function toggleDone(){
                const text = createLi.querySelector("li");
                
                if(this.checked){
                    text.style.backgroundColor = 'green';
                }else {
                    text.style.backgroundColor = '#333333';
                }

                if (text.style.textDecoration === 'line-through'){
                    text.style.textDecoration = "none";
                } else {
                    text.style.textDecoration = 'line-through'
                    console.log('Task Done!');
                }
            }
}
