import { header,sidebar, toDoForm, projectForm } from "./domCreation";
import { manageLocal } from "./manageLocalStorage";
import { renderProjects, renderToDo, updateView } from "./renderDom";
import { Project } from "./projects";
import { todoFactory } from "./todo";
import { addProject, addTodo, removeProject, retrieveProject, removeTodo} from "./projectManager";
import { addProjectForm, allTodoEvent,handleCompleteViewEvent, handleForm, handleModal, removeToDoBtn} from "./events";
import {modal, populateModal, toggleModal, windowOnClick} from './todoModal'
import { renderCompleteView } from "./completedToDo";
import { allToDos, renderAllToDos } from "./renderAllToDos";

const init = (()=>{

    let todo = todoFactory('Work', "do shit","", '2021-12-24', "Low")
    let todo1 = todoFactory('Eat', "make food","", '2021-12-28', "High")
    const defaultProject = Project('Welcome');
    const btn = document.querySelector('.add-todo')
    btn.style.display = 'none' 
    addProject(defaultProject)
    addTodo(defaultProject, todo1)
    addTodo(defaultProject, todo)
    renderProjects()
    addProjectForm()
    allToDos()
    modal()
    start()
    allTodoEvent()
    handleCompleteViewEvent()
    handleModal()
    removeToDoBtn()

    renderAllToDos()
})()
export function removeActiveClass(){
    const project  = document.querySelectorAll('.p-name')
    const icon  = document.querySelectorAll('i')
    const complete = document.querySelector('.completed')
    const allTodo = document.querySelector('.all-todo')
    allTodo.classList.remove('active')
    complete.classList.remove('active')
        icon.forEach((i)=>{
        i.classList.remove('active-icon')
    })
    project.forEach((p) =>{
        p.classList.remove('active')
    })
}
function handleActiveClassIcon(target){
    let container = document.querySelector('.todos')
    removeActiveClass()
    target.classList.toggle('active')
    target.children[0].classList.toggle('active-icon')
    let todo = retrieveProject(target.id).todos
    container.innerHTML = ''
    renderToDo(todo)
    removeToDoBtn()//Initializes the function or it wont work
    handleModal()
    const btn = document.querySelector('.add-todo')
    btn.style.display = 'block' 

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
                removeActiveClass()
            }
            handleActiveClassIcon(target)
        })
    })
}
