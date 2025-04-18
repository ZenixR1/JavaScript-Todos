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


//styling for the body
body.style.backgroundColor = '#333333';
//styling for header
header.style.backgroundColor = '#1a1a1a';
//styling for the contentContainer
contentContainer.style.backgroundColor = '#1a1a1a'
//styling for the input field
inputContainer.style.padding = '5px';
inputContainer.style.border = '2px solid black';
inputContainer.style.borderRadius = '8px';


//Adding placeholder text to input field as well as padding.
createTask.placeholder = 'Add a task then press Enter!';
createTask.style.padding = '8px';
createTask.style.fieldSizing = 'content';


createTask.addEventListener("keydown",function(event){
    if (event.key === "Enter"){
        addToDo();
        console.log('test');
    }
});//Events listener for add button

function addToDo(){
    const task = createTask.value; //grabs the value from the input
    const todoContainer = document.createElement('div');

    if (task != ''){ //This if statement prevents an empty submission from being passed.
        //setting the li-container to be flex column
            liContainer.style.display = 'flex';
            liContainer.style.flexDirection = 'column';

        //setting the todo-container to be flex row
            todoContainer.style.display = 'flex';
            todoContainer.style.flexDirection = 'row';
            todoContainer.style.margin = '2px';
        //create the div that houses the priority flag
            const priorityFlag = document.createElement('div');
            const flag = document.createElement('svg');
            priorityFlag.style.backgroundColor = '#333333';
            priorityFlag.style.border = '2px solid black';
            priorityFlag.style.borderRadius = '8px';
            priorityFlag.style.padding = '10px';
            priorityFlag.style.width = 'max-content'
            flag.classList.add('fa-solid');
            flag.classList.add('fa-chevron-up');
            priorityFlag.append(flag);
        // create the checkbox div and style it
            const checkboxContainer = document.createElement('div');
            checkboxContainer.style.backgroundColor = '#333333';
            checkboxContainer.style.border = '2px solid black';
            checkboxContainer.style.borderRadius = '8px';
            checkboxContainer.style.padding = '10px';
            checkboxContainer.innerHTML = 
            `
            <input type="checkbox" id="taskCheck"/>
            `;
            checkboxContainer.style.marginRight = '5px';
        // create the task div which provides the task li --- lines 47-58 are additions to the createLi div.
            const createLi = document.createElement('div'); 
            createLi.classList.add('.createdTask');
            createLi.innerHTML = 
            `
                <li>${task}</li>
            `;
            createLi.style.backgroundColor = '#333333';
            createLi.style.listStyle = 'none';
            createLi.style.border = '2px solid black';
            createLi.style.borderRadius = '8px';
            createLi.style.display = 'flex';
            createLi.style.flexDirection = 'row';
            createLi.style.textAlign = 'center';
            createLi.style.padding = '10px';
        //create the div and divs for the up and down arrows for priority
            const priorityToggles = document.createElement('div');
            const upPriority = document.createElement('div');
            const downPriority = document.createElement('div');

            todoContainer.append(priorityFlag)
            todoContainer.append(checkboxContainer); //These two combine the checkbox div and the task li divs. 
            todoContainer.append(createLi);
            todoContainer.append(priorityToggles);

            liContainer.append(todoContainer);//This adds the combined divs to the UL "li-container"
            
            createTask.value = ''; //Clear the text after submission.

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

}