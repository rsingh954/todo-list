import { renderProjects, updateView } from "./renderDom"
import { manageProjects } from "./projectManager"
import { todoFactory } from "./todo"
import { renderToDo } from "./renderDom"
import { projectForm } from "./domCreation"
import { Project } from "./projects"
import { removeToDoBtn } from "."

export function showForm(e){
    e.preventDefault()
    const form = document.querySelector('.todo-form-container')
    const active = document.querySelector('.active')
    if(!active) return alert('Please Select Project')
    form.style.display == 'flex' ? form.style.display = 'none':form.style.display = 'flex'
}

export function submitToDo(e){
    e.preventDefault()
    const active = document.querySelector('.active')
    let project = manageProjects().retrieveProject(active.id)
    
    const title = document.querySelector('input[name="title"]')

    const description = document.querySelector('input[name="description"]')

    const date = document.querySelector('input[name="date"]')

    const notes = document.querySelector('input[name="notes"]')

    const priority = document.querySelector('input[name="priority"]:checked').value;

    const todo = todoFactory(title.value,description.value,notes.value,date.value,priority)
    let todos = project.todos
    manageProjects().addTodo(project, todo)
    updateView('todo')
    removeToDoBtn()
}

export function addProjectForm(){
    const addProject = document.querySelector('.add-project')
    addProject.addEventListener('click',projectForm) 
}
export function submitProject(e){
    const name = e.target.previousElementSibling.value
    e.preventDefault()
    const newProject = Project(name)
    manageProjects().addProject(newProject)
    updateView('project')
    return
    
}