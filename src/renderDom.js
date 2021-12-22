import { manageLocal } from "./manageLocalStorage";
import { retrieveProject } from './projectManager';
import { start,removeToDoBtn, handleModal } from ".";
import { format, parseISO  } from "date-fns"

const renderProjects = (()=>{
    const projects = manageLocal.getProjects()
    const li = document.querySelector('.project')

    for(let i = 0; i <= projects.length-1; i++){
        const project = document.createElement('div')
        const icon = document.createElement('i')
        icon.id=projects[i]._name 
        project.appendChild(icon)
        project.classList.add('p-name')
        project.textContent = projects[i]._name 
        project.id = projects[i]._id
        li.appendChild(project)
        project.appendChild(icon)

    }
   
})

const renderToDo = ((todos)=>{
    if(todos == undefined) return 
    const projects = manageLocal.getProjects()
    const body = document.querySelector('.body')
    let toDoContainer = document.querySelector('.todos')
    let wrapper = document.querySelector('.wrapper')


    for(let i = 0; i < todos.length; i++){
            //Card
            const container = document.createElement('div')
            container.classList.add('container')
            container.id = todos[i]._id

            //title
            const title = document.createElement('h1')
            title.classList.add('title')
            title.id = todos[i]._id
            title.textContent = todos[i]._title
            
          //Due date
            const dueDate = document.createElement('div')
            dueDate.classList.add('dueDate')
            dueDate.id =todos[i]._id
            dueDate.textContent = 'Due Date: ' + format(new Date(todos[i].dueDate), 'MM/dd/yyyy')

            //Priority
            const priority = document.createElement('div')
            priority.classList.add('priority')
            priority.id =todos[i]._id

            priority.textContent = 'Priority: ' + todos[i].priority

            // delete todo
            const button = document.createElement('a')
            button.id = todos[i]._title
            button.classList.add('remove-todo')
            button.innerHTML = "&#10006"

            container.appendChild(title)
            container.appendChild(dueDate)
            container.appendChild(priority)
            container.appendChild(button)
            
            toDoContainer.appendChild(container)
            wrapper.appendChild(toDoContainer)
            body.appendChild(wrapper)
        }
})
function getProject() {
    const active = document.querySelector('.active')
    return retrieveProject(active.id)
}
export const retrieveTodo = () =>{
    const active = document.querySelector('.active') 
    if(!active) return
    const form  = document.querySelector('.todo-form-container')
    let project = retrieveProject(active.id) 
    if(project){
        const todos = project.todos
        return todos
    }

}
const updateView =(state) =>{
    if(state == 'todo'){
        // const active = document.querySelector('.active') 
        const form  = document.querySelector('.todo-form-container')
        // let project = retrieveProject(active.id)
        let container = document.querySelector('.todos')
        container.innerHTML = '';
        renderToDo(retrieveTodo())
        form.style.display = 'none'
        removeToDoBtn()
        handleModal()
    }
    if(state == 'project'){
        const sidebar = document.querySelector('.project') 
        let container = document.querySelector('.todos')
        sidebar.innerHTML = ''
        container.innerHTML = '';
        renderProjects()
        start()
    }
    
}

export {renderProjects, renderToDo,updateView}