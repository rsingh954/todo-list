import { header,sidebar, toDoForm, projectForm } from "./domCreation";
import { manageLocal } from "./manageLocalStorage";
import { renderProjects, renderToDo, updateView } from "./renderDom";
import { Project } from "./projects";
import { todoFactory } from "./todo";
import { addProject, addTodo, removeProject, retrieveProject, removeTodo} from "./projectManager";
import { addProjectForm } from "./events";
import {modal, populateModal, toggleModal, windowOnClick} from './todoModal'
import { renderCompleteView } from "./completedToDo";
import { allToDos, renderAllToDos } from "./renderAllToDos";

allToDos()
const init = (()=>{
    let todo = todoFactory('Work', "do shit","", '2021-12-24', "Low")
    let todo1 = todoFactory('Eat', "make food","", '2021-12-28', "high")
    const defaultProject = Project('Welcome');

    addProject(defaultProject)
    addTodo(defaultProject, todo1)
    addTodo(defaultProject, todo)
    renderProjects()
    addProjectForm()
})()
export function removeActiveClass(){
    const project  = document.querySelectorAll('.p-name')
    const icon  = document.querySelectorAll('i')
    icon.forEach((i)=>{
        i.classList.remove('active-icon')
    })
    project.forEach((p) =>{
        p.classList.remove('active')
    })
}
export function start(){
    const projectNames = document.querySelectorAll('.p-name')
    const getCompletedTodos = manageLocal.getCompleted()
    const completeName = document.querySelector('.completed-count')
    completeName.textContent = " " + getCompletedTodos.length
    projectNames.forEach((name) =>{
        name.addEventListener('click', e =>{
            const {target} = e
            if(target.classList.contains('active-icon')) {
                removeProject(target.id)
                renderProjects()
                updateView('project')
                return
            }
            let container = document.querySelector('.todos')
            removeActiveClass()
            const complete = document.querySelector('.completed')
            const allTodo = document.querySelector('.all-todo')
            allTodo.classList.remove('active')
            complete.classList.remove('active')
            target.classList.toggle('active')
            target.children[0].classList.toggle('active-icon')
            let todo = retrieveProject(target.id).todos
            container.innerHTML = ''
            renderToDo(todo)
            removeToDoBtn()//Initializes the function or it wont work
            handleModal()
        })
    })

}
export function removeToDoBtn(){
    const removeToDoBtn = document.querySelectorAll('.remove-todo') 
    removeToDoBtn.forEach((btn) => {
        btn.addEventListener('click', e =>{
            const {target} = e
            const currentProject = document.querySelector('.active')
            const project = retrieveProject(currentProject.id)
            console.log(target.id)
            removeTodo(project, target.id)
            updateView('todo')
        })
    })
}

export function handleModal(){

    const trigger = document.querySelectorAll(".container");
    const closeButton = document.querySelector(".close-button");

    trigger.forEach((trig) =>{
        trig.addEventListener("click", e=>{

            if(e.target.classList.value === 'remove-todo')return
            
            populateModal(e.target.id)
            toggleModal()
        });
    })
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
}

start()

modal()
const complete = document.querySelector('.completed')
complete.toggleAttribute('click')
complete.addEventListener('click', e =>{
    complete.classList.toggle('active')
    renderCompleteView()
})

const allTodo = document.querySelector('.all-todo')
allTodo.addEventListener('click', e =>{
    allTodo.classList.toggle('active')
    removeActiveClass()
    let todos = allToDos()
    renderAllToDos(todos)
})
