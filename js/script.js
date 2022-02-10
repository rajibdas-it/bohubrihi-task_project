let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

//Define Event Listener: 
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', celarTask);

//Define Function:

function addTask(e){
    if (taskInput.value ===''){
        alert('Add a task.')
    }else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value+ " "));
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value = ''
    }
    e.preventDefault(); //Its hold the task in body.

} 

function removeTask(e){
    if(e.target.hasAttribute("href")){
        if(confirm("Are you sure?")){
            let ele = e.target.parentElement;
            ele.remove();
        }
       
    }
    

}

function celarTask(e){
    if (confirm("Are you sure delete all data?")){
        taskList.innerHTML = " ";
    }
    
}
