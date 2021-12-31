import { removeActiveClass } from "."
import { manageLocal } from "./manageLocalStorage"
import { removeTodo } from "./projectManager"
import { renderToDo, updateView } from "./renderDom"

export const renderCompleteView =  (()=>{
    const getCompletedTodos = manageLocal.getCompleted()
    const completedName = document.querySelector('.completed-count')
    const wrapper = document.querySelector('.todos')
    const todos = document.querySelector('.todos')
    const remove = document.querySelectorAll('.remove-todo')
    removeActiveClass()
    
    wrapper.innerHTML = ''
    renderToDo(getCompletedTodos)
})