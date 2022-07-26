const inputTask = document.querySelector('.input-task')
const addBtn = document.querySelector('.add')
const taskList = document.querySelector('.task-list')
/*===================================== Cria um Li ==================================================*/
function createLi() {
    const li = document.createElement('li')
    return li
}

/*===================================== Cria um botao em cada Li ====================================*/

function createButton(item){
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Apagar'
    deleteBtn.setAttribute('class', 'delete')
    item.appendChild(deleteBtn)
}

/*===================================== Cria uma nova task ==========================================*/

function createTask(task){
    const li  = createLi()
    li.innerHTML = task
    taskList.appendChild(li)
    clearInput()
    createButton(li)
    saveTask()
}

/*===================================== limpa o campo input ==========================================*/

function clearInput(){
    inputTask.value = ''
    inputTask.focus()
}

/*===================================== salva as tasks no local storage ==============================*/

function saveTask(){
    const liTask = taskList.querySelectorAll('li')
    let liTasks = []

    for(let task of liTask){
        let taskText = task.innerHTML
        taskText = taskText.replace('<button class=\"delete\">Apagar</button>', '')
        liTasks.push(taskText) 
    }
    const tasksJSON = JSON.stringify(liTasks)
    localStorage.setItem('tasks', tasksJSON)
}

/*===================================== obtém tasks do local Storage ====================================*/

(function getSaveTasks (){
    const tasks = localStorage.getItem('tasks')
    const tasksList = JSON.parse(tasks)

    for(let task of tasksList){
        createTask(task)
    }
})()

/*===================================== adiciona task com enter =====================================*/

inputTask.addEventListener('keypress', (event)=>{
    if(event.keyCode === 13 && inputTask.value) createTask(inputTask.value)
})

/*===================================== adiciona task pelo botão ====================================*/

addBtn.addEventListener('click', ()=>{
    if(!inputTask.value) return
    createTask(inputTask.value)
})

/*===================================== exclui uma task =================================================*/

document.addEventListener('click', (event)=>{
    const el = event.target
    if(el.classList.contains('delete')){
        el.parentElement.remove();
        saveTask()
    }
})


