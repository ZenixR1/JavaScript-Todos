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



body.style.backgroundColor = '#333333';//styling for the body

header.style.backgroundColor = '#1a1a1a';//styling for header

contentContainer.style.backgroundColor = '#1a1a1a'//styling for the contentContainer

inputContainer.style.padding = '5px';
inputContainer.style.border = '2px solid black';
inputContainer.style.borderRadius = '8px';

//Adding placeholder text to input field as well as padding.
createTask.placeholder = 'Select Enter to add Task!';
createTask.style.padding = '8px';

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
        // create the checkbox div and style it
            const checkboxContainer = document.createElement('div');
            checkboxContainer.style.backgroundColor = '#333333';
            checkboxContainer.style.border = '2px solid black';
            checkboxContainer.style.borderRadius = '8px';
            checkboxContainer.style.padding = '5px';
            checkboxContainer.innerHTML = 
            `
            <input type="checkbox" id="taskCheck"/>
            `;
            checkboxContainer.style.marginRight = '5px';

            const createLi = document.createElement('div'); //This creates the div that houses the task.
            createLi.classList.add('.createdTask');  // --- lines 47-58 are additions to the createLi div.
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
            createLi.style.padding = '5px';

            todoContainer.append(checkboxContainer); //These two combine the checkbox div and the task li divs. 
            todoContainer.append(createLi);

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