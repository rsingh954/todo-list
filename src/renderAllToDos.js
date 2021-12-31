import { removeActiveClass } from ".";
import { handleModal } from "./events";
import { manageLocal } from "./manageLocalStorage"
import { renderToDo } from "./renderDom";

export const allToDos = () =>{
    const projects = manageLocal.getProjects();

    let todos = []

    projects.forEach((project) => {
        todos.push(...project.todos)
    })
    return todos
} 

export const renderAllToDos = () =>{
    let todos = allToDos();
    const wrapper = document.querySelector('.todos')
    wrapper.innerHTML = ''
    renderToDo(todos)
    const right = document.querySelectorAll('.right')
    right.forEach(r => {
        r.style.display = 'none'
    })
    handleModal()
}