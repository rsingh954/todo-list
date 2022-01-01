import { clearForm, renderProjects, updateView } from "./renderDom"
import { retrieveProject, addTodo, addProject, removeTodo, completeTodo, editTodos, deleteCompletedToDo} from "./projectManager"
import { todoFactory } from "./todo"
import { renderToDo } from "./renderDom"
import { projectForm } from "./domCreation"
import { Project } from "./projects"
import { allToDos, renderAllToDos } from "./renderAllToDos";
import { removeActiveClass, start } from "."
import { renderCompleteView } from "./completedToDo";
import {editTodo, modal, populateModal, toggleModal, windowOnClick} from './todoModal'
import { manageLocal } from "./manageLocalStorage"
import PubSub from 'pubsub-js'

export function showForm(e){
    e.preventDefault()
    clearForm()
    const form = document.querySelector('.todo-form-container')
    const active = document.querySelector('.active')
    if(!active) return alert('Please Select Project')
    const submitBtn = document.querySelector('.submit')
    submitBtn.textContent = "Submit"
    if(form.style.display == 'flex'){
        form.classList.remove('show-form')
        form.style.display = 'none'
    }else{
        form.classList.add('show-form')
        form.style.display = 'flex'
    }
}


export function submitToDo(e){
    e.preventDefault()
    if(e.target.innerHTML == 'Confirm'){
        const active = document.querySelector('.active')
        let project = retrieveProject(active.id)
        const todos = allToDos()
        const todo = todos.filter((todo) => todo._id == e.target.id)
        const title = document.querySelector('input[name="title"]')
        const description = document.querySelector('input[name="description"]')
        const date = document.querySelector('input[name="date"]')
        const notes = document.querySelector('input[name="notes"]')
        const priority = document.querySelector('input[name="priority"]:checked').value;
        editTodos(project,e.target.id,title.value,description.value,notes.value,date.value,priority )

    }
    const active = document.querySelector('.active')
    let project = retrieveProject(active.id)
    const title = document.querySelector('input[name="title"]')
    const description = document.querySelector('input[name="description"]')
    const date = document.querySelector('input[name="date"]')
    const notes = document.querySelector('input[name="notes"]')
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const todo = todoFactory(title.value,description.value,notes.value,date.value,priority)
    let todos = project.todos
    addTodo(project, todo)
    updateView('todo')
    removeToDoBtn()
    start()
}
export function addProjectForm(){
    const addProject = document.querySelector('.add-project')
    addProject.addEventListener('click',projectForm) 
}
export function submitProject(e){
    const name = e.target.previousElementSibling.value
    e.preventDefault()
    if(name === "") {
        alert("please enter a name")
        return
    }
    const newProject = Project(name)
    addProject(newProject)
    updateView('project')
    return
}
export const allTodoEvent = () =>{
    const allTodo = document.querySelector('.all-todo')
    allTodo.addEventListener('click', e =>{
        e.preventDefault
        removeActiveClass()
        allTodo.classList.toggle('active')
        const btn = document.querySelector('.add-todo')
        btn.style.display = 'none' 
        renderAllToDos()
        const todoForm = document.querySelector('.todo-form-container')
        todoForm.style.display = 'none'
    })
} 
export const handleCompleteViewEvent = () =>{
    const complete = document.querySelector('.completed')
    complete.toggleAttribute('click')
    complete.addEventListener('click', e =>{
        e.preventDefault
        complete.classList.toggle('active')
        const btn = document.querySelector('.add-todo')
        btn.style.display = 'none' 
        renderCompleteView()
        const todoForm = document.querySelector('.todo-form-container')
        todoForm.style.display = 'none'
        const remove = document.querySelectorAll('.remove-todo').forEach((r) =>{
            r.onclick = function(){
                deleteCompletedToDo(r.previousElementSibling.id)
                renderCompleteView()
                start()
                removeToDoBtn()
            }
        })
    })
}
export function handleModal(){
    const trigger = document.querySelectorAll(".container");
    const closeButton = document.querySelector(".close-button");

    trigger.forEach((trig) =>{
        trig.addEventListener("click", e=>{
            e.preventDefault()
            if(e.target.classList.value === 'remove-todo') return
            populateModal(e.target.id)
            toggleModal()
        });
    })
    closeButton.addEventListener("onclick", toggleModal);
    window.addEventListener("click", windowOnClick);
}
export function removeToDoBtn(){
    const removeToDoBtn = document.querySelectorAll('.remove-todo') 
    removeToDoBtn.forEach((btn) => {
        btn.addEventListener('click', e =>{
            e.preventDefault()
            const {target} = e
            const currentProject = document.querySelector('.active') 
            if(currentProject != null){
                console.log(currentProject)
                const project = retrieveProject(currentProject.id)
                completeTodo(project, target.id)
                updateView('todo')
            }else{
                let project = manageLocal.getCompleted()
                let id = e.target.previousElementSibling.id
                deleteCompletedToDo(id)
                updateView('todo')
            }
        })
    })
}

