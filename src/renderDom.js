import { manageLocal } from "./manageLocalStorage";
import { manageProjects } from './projectManager';
import { start } from ".";
import { removeToDoBtn } from ".";

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
            title.textContent = todos[i]._title

            //Description
            const description = document.createElement('div')
            description.classList.add('description')
            description.textContent = 'description: '+todos[i].description

            //Due date
            const dueDate = document.createElement('div')
            dueDate.classList.add('dueDate')
            dueDate.textContent = 'Due Date: ' + todos[i].dueDate
            
            //Notes
            const notes = document.createElement('div')
            notes.classList.add('notes')
            notes.textContent = 'Notes: ' + todos[i].notes

            //Priority
            const priority = document.createElement('div')
            priority.classList.add('priority')
            priority.textContent = 'Priority: ' + todos[i].priority

            // delete todo
            const button = document.createElement('a')
            button.id = todos[i]._title
            button.classList.add('remove-todo')
            button.textContent = "Remove Todo"

            container.appendChild(title)
            container.appendChild(description)
            container.appendChild(dueDate)
            container.appendChild(notes)
            container.appendChild(priority)
            container.appendChild(button)
            
            toDoContainer.appendChild(container)
            wrapper.appendChild(toDoContainer)
            body.appendChild(wrapper)
        }
})
function getProject() {
    const active = document.querySelector('.active')
    return manageProjects().retrieveProject(active.id)
}

//Very Important function
const updateView =(state) =>{
    if(state == 'todo'){
        const active = document.querySelector('.active') 
        const form  = document.querySelector('.todo-form-container')
        let project = manageProjects().retrieveProject(active.id)
        const todos = project.todos 
        let container = document.querySelector('.todos')
        container.innerHTML = ''
        renderToDo(todos)
        form.style.display = 'none'
        removeToDoBtn()
    }
    if(state == 'project'){
        const sidebar = document.querySelector('.project') 
        sidebar.innerHTML = ''
        renderProjects()
        return
    }
    
}

export {renderProjects, renderToDo,updateView}