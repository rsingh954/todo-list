import { manageLocal } from "./manageLocalStorage";
import { retrieveProject } from './projectManager';
import { start } from ".";
import { format, parseISO  } from "date-fns"
import { handleModal } from "./events";
import { removeToDoBtn } from "./events";
import { editTodo } from "./todoModal";
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


    const container = document.createElement('div')
    container.classList.add('container-heading')

    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = 'Task'

    const button = document.createElement('a')
    button.classList.add('remove-todo')
    button.innerHTML = ''


    container.appendChild(title)
    container.appendChild(button)


    toDoContainer.appendChild(container)
    wrapper.appendChild(toDoContainer)
    body.appendChild(wrapper)


    for(let i = 0; i < todos.length; i++){
            //Card
            const container = document.createElement('div')
            container.classList.add('container')
            container.id = todos[i]._id

            //title
            const title = document.createElement('h4')
            title.classList.add('title')
            title.id = todos[i]._id
            title.textContent = todos[i]._title
            
           //Edit
            const right = document.createElement('div')
            right.classList.add('right')

            const editBtn = document.createElement('button')
            editBtn.classList.add('edit-todo')
            editBtn.id =todos[i]._id

            editBtn.innerHTML = '✎'
            editBtn.onclick = editTodo

            // move todo to complete
            const button = document.createElement('button')
            button.id = todos[i]._title
            button.classList.add('remove-todo')
            button.innerHTML = "&#10006"


            right.appendChild(editBtn)
            right.appendChild(button)

            container.appendChild(title)
            container.appendChild(right)

            
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
    if(!active) return manageLocal.getCompleted()
    const form  = document.querySelector('.todo-form-container')
    let project = retrieveProject(active.id) 
    if(project){
        const todos = project.todos
        return todos
    }

}
const updateView = (state) =>{
    if(state == 'todo'){
        const form  = document.querySelector('.todo-form-container')
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

export const clearForm = () =>{
    const title = document.querySelector('input[name="title"]')
    title.value = ""

    const description = document.querySelector('input[name="description"]')
    description.value = ""

    const notes = document.querySelector('input[name="notes"]')
    notes.value = ""

    const date = document.querySelector('input[name="date"]')
    date.value = null

    const priority = document.querySelectorAll('input[name="priority"]')
    priority.forEach((p) => {
        p.checked = false
    })

}
export {renderProjects, renderToDo,updateView}