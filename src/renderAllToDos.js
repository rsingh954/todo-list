import { removeActiveClass } from ".";
import { manageLocal } from "./manageLocalStorage"
import { renderToDo } from "./renderDom";

export const allToDos = () =>{
    const projects = manageLocal.getProjects();

    let todos = []

    projects.forEach((project) => {
        todos.push(...project.todos)
    })
    console.log(todos)
    return todos
} 

export const renderAllToDos = (todos) =>{
    removeActiveClass()
    const wrapper = document.querySelector('.todos')
    wrapper.innerHTML = ''
    renderToDo(todos)

}