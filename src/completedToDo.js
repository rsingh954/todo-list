import { removeActiveClass } from "."
import { manageLocal } from "./manageLocalStorage"
import { renderToDo, updateView } from "./renderDom"

export const renderCompleteView =  (()=>{
    const getCompletedTodos = manageLocal.getCompleted()
    const wrapper = document.querySelector('.todos')
    removeActiveClass()
    wrapper.innerHTML = ''
    renderToDo(getCompletedTodos)
})