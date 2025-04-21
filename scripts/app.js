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


//styling for the body
body.style.backgroundColor = '#333333';
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
todoContainer.style.backgroundColor =' #1a1a1a';
todoContainer.style.minWidth = '35rem'
todoContainer.style.minHeight = '10rem';
todoContainer.style.boxShadow = '5px 5px 100px #a200ff'
//styling for the input field
inputContainer.style.margin = '8px';
inputContainer.style.padding = '8px';
inputContainer.style.border = '2px solid black';
inputContainer.style.borderRadius = '8px';
inputContainer.style.alignSelf = 'center';
inputContainer.style.backgroundColor = '#333333';
inputContainer.style.transition = 'all 1s';
inputContainer.style.display = 'flex';
inputContainer.style.justifyContent = 'center';
inputContainer.style.boxShadow = '2px 2px 15px #a200ff';




//Adding placeholder text to input field as well as padding.
createTask.placeholder = 'Add a task then press Enter!';
createTask.textAlign = 'center';
createTask.style.padding = '8px';
createTask.style.minWidth = '25rem'




createTask.addEventListener("keydown",function(event){
    if (event.key === "Enter"){
        addToDo();
        console.log('Task has been entered successfully');
    }
});//Events listener for add button

function addToDo(){
    const task = createTask.value; //grabs the value from the input
    const todoContent = document.createElement('div');

    if (task != ''){ //This if statement prevents an empty submission from being passed.
        //setting the li-container to be flex column
            liContainer.style.display = 'flex';
            liContainer.style.flexDirection = 'column';
            liContainer.style.padding = '0';

        //setting the todo-container to be flex row
            todoContent.style.display = 'flex';
            todoContent.style.flexDirection = 'row';
            todoContent.style.margin = '2px';
        //create the div that houses the priority flag
            const priorityFlag = document.createElement('div');
            priorityFlag.style.backgroundColor = '#333333';
            priorityFlag.style.border = '2px solid black';
            priorityFlag.style.borderRadius = '8px';
            priorityFlag.style.padding = '10px';
            priorityFlag.style.width = 'max-content';
            const flag = document.createElement('svg');
            flag.classList.add('thePriorityFlag');
            flag.style.height = 'min-content';
            priorityFlag.append(flag);
            priorityFlag.style.display = 'flex';
            priorityFlag.style.justifyContent = 'center';
            priorityFlag.style.height = 'min-content';
            priorityFlag.style.alignSelf = 'center';
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
            checkboxContainer.style.marginLeft = '5px';
            checkboxContainer.style.marginRight = '5px';
            checkboxContainer.style.display = 'flex';
            checkboxContainer.style.justifyContent = 'center';
            checkboxContainer.style.alignItems = 'center';
            checkboxContainer.style.minWidth = '32px';
            checkboxContainer.style.minHeight = '32px';
        // create the task div which provides the task li --- lines 47-58 are additions to the createLi div.
            const createLi = document.createElement('div'); 
            createLi.classList.add('createdTaskDiv');
            createLi.innerHTML = 
            `
                <li class="createdTask">${task}</li>
            `;
            createLi.style.backgroundColor = '#333333';
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
            upPriority.style.background = '#333333';
            upPriority.style.border = '2px solid black';
            upPriority.style.borderRadius = '8px';
            upPriority.style.padding = '4px 2px';
            upPriority.classList.add('upThePriority');
            downPriority.style.background = '#333333';
            downPriority.style.border = '2px solid black';
            downPriority.style.borderRadius = '8px';
            downPriority.style.padding = '4px 2px';
            downPriority.style.marginTop = '2px';
            downPriority.classList.add('downThePriority');

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

            liContainer.append(todoContent);//This adds the combined divs to the UL "li-container"
            
            createTask.value = ''; //Clear the text after submission.


            const priority = priorityFlag.querySelector('.thePriorityFlag');
            if (!priority.classList.contains('fa-chevron-up') || !priority.classList.contains('fa-chevron-down') || !priority.classList.contains('fa-bars')){
                priority.classList.add('fa-solid');
                priority.classList.add('fa-bars');
            }
        //DOM for up priority arrow
            const upPriorityArrow = document.querySelector('div.upThePriority');
            upPriorityArrow.addEventListener('click', () => {                
                //console.log(priority.classList) //debug
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
            const downPriorityArrow = document.querySelector('div.downThePriority');
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

}