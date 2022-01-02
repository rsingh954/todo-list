import { clearForm, retrieveTodo } from "./renderDom"
import { format, sub  } from "date-fns"
import { showForm, submitToDo } from "./events"
import { allToDos } from "./renderAllToDos"
import { projectForm } from "./domCreation"
import { deleteCompletedToDo, editTodos, retrieveProject } from "./projectManager"
import { renderCompleteView } from "./completedToDo"
import { start } from "."

export function populateModal(id) {
    if(!Number(id)) return
    const todos = allToDos()
    const todo = todos.filter((todo) => todo._id == id)

    //TITLE 
    const title = document.querySelector('.title-modal')
    title.textContent = todo[0]._title

    //DESCRIPTION
    const modalDescription = document.querySelector('.description')
    modalDescription.textContent ='Description: ' + todo[0].description
    //Notes
    const notes = document.querySelector('.notes')
    notes.textContent = 'Notes: ' + todo[0].notes
    //DUE DATE
    const dueDate = document.querySelector('.dueDate-modal')
    dueDate.innerHTML = 'Due On ' + format(new Date(todo[0].dueDate),'MM/dd/yyyy')
    //Priority
    const priority = document.querySelector('.priority-modal')
    priority.textContent = todo[0].priority

}          


export const modal = () =>{
    const active = document.querySelector('.active')

    const title = document.createElement('h1')
    title.classList.add('title-modal')

    const modal = document.createElement('div')
    modal.classList.add('modal')

    const modalContent = document.createElement('div')
    modalContent.classList.add('modal-content')

    const modalDescription = document.createElement('div')
    modalDescription.classList.add('description')

    const notes = document.createElement('div')
    notes.classList.add('notes')

    const dueDate = document.createElement('div')
    dueDate.classList.add('dueDate-modal')

    const priority = document.createElement('div')
    priority.classList.add('priority-modal')

    const closeModal = document.createElement('button')
    closeModal.classList.add('close-button')
    closeModal.textContent = `x`
    modalContent.appendChild(closeModal)
    modalContent.appendChild(title)
    modalContent.appendChild(modalDescription)
    modalContent.appendChild(notes)
    modalContent.appendChild(dueDate)
    modalContent.appendChild(priority)
    modal.appendChild(modalContent)

    const body = document.querySelector('body')
    body.appendChild(modal) 

}

export function editTodo(e){
    const todos = allToDos()
    const todo = todos.filter((todo) => todo._id == e.target.id)
    const active = document.querySelector('.active')
    if(active.classList.contains('all-todo')){
        return
    }
    let project = retrieveProject(active.id)
    toggleModal()
    clearForm()
    const form = document.querySelector('.todo-form-container')
    form.style.display = 'flex'

    const title = document.querySelector('input[name="title"]')
    title.value = todo[0]._title

    const description = document.querySelector('input[name="description"]')
    description.value = todo[0].description

    const notes = document.querySelector('input[name="notes"]')
    notes.value = todo[0].notes

    const date = document.querySelector('input[name="date"]')
    date.value = todo[0].dueDate

    const priority = document.querySelectorAll('input[name="priority"]')
    priority.forEach((p) => {
        if(p.value == todo[0].priority){
            p.checked = true
        }
    })

    const submitBtn = document.querySelector('.submit')
    submitBtn.textContent = "Confirm"
    submitBtn.id = todo[0]._title
}

export function toggleModal() {
    const modal = document.querySelector(".modal");
    const trigger = document.querySelector(".container");
    const closeButton = document.querySelector(".close-button");
    modal.classList.toggle("show-modal");
}
export function windowOnClick(event) {
    const modal = document.querySelector(".modal");
    const trigger = document.querySelector(".container");
    const closeButton = document.querySelector(".close-button");
    if (event.target == modal || event.target.classList.value == 'close-button' ) {
        toggleModal();
    }
}
