import './styles.css'
import { addProject, showForm } from './events';
// import { manageProjects } from './projectManager';
import { submitToDo } from './events';
import { submitProject } from './events';


const header = (() =>{
    const header = document.createElement('header');
    const h1 = document.createElement('h1')
    const a =document.createElement('a')
    const mainNav = document.createElement('ul')
    const li = document.createElement('li')
    const addProject = document.createElement('a')
    addProject.classList.add('add-project')
    addProject.textContent = "Add Project"
    a.textContent = "ToDo List"

    header.classList.add('header')
    h1.classList.add('logo')
    mainNav.classList.add('main-nav')

    h1.appendChild(a)
    li.appendChild(addProject)
    mainNav.appendChild(li)
    header.appendChild(h1)
    header.appendChild(mainNav)
 
    document.body.appendChild(header)

})() 

const sidebar = (()=>{
    const sidebar = document.createElement('div')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const body = document.createElement('div')
    const completed = document.createElement('div')
    const span = document.createElement('span')
    const allTodos = document.createElement('div')
    allTodos.textContent = 'View All Tasks'

    completed.classList.add('completed')
    completed.textContent = 'Completed'
    completed.appendChild(span)
    span.classList.add('completed-count')
    allTodos.classList.add('all-todo')
    body.classList.add('body')
    sidebar.classList.add('sidebar')
    ul.classList.add('projects')
    li.classList.add('project')

    sidebar.appendChild(allTodos)
    ul.appendChild(li)
    sidebar.appendChild(ul)
    sidebar.appendChild(completed)
    body.appendChild(sidebar)
    document.body.appendChild(body)
})()

const toDoForm = (() =>{
    const container = document.createElement('div')
    const wrapper =  document.createElement('div')
    const body = document.querySelector('.body')
    const formContainer = document.createElement('div')
    const form = document.createElement('form')
    const title = document.createElement('label')
    const titleInput = document.createElement('input')
    const description = document.createElement('label')
    const descriptionInput = document.createElement('input')
    const date = document.createElement('label')
    const dateInput = document.createElement('input')
    const note = document.createElement('label')
    const noteInput = document.createElement('input')
    const priorityContainer = document.createElement('div')
    const btn = document.createElement("button")
    const submit = document.createElement("button")
    

    wrapper.classList.add('wrapper')
    submit.textContent = 'Submit'
    btn.textContent = 'Add todo'

    title.setAttribute('for', 'title')
    titleInput.type = 'text'
    titleInput.name = 'title'
    title.textContent = "Title"

    description.setAttribute('for', 'description')
    descriptionInput.type = 'text'
    descriptionInput.name = 'description'
    description.textContent = "Description"

    date.setAttribute('for', 'dueDate')
    dateInput.type = 'date'
    dateInput.name = 'date'
    date.textContent = "Date"

    note.setAttribute('for', 'note')
    noteInput.type = 'text'
    noteInput.name = 'notes'
    note.textContent = "Notes"
    
    priorityContainer.classList.add("priority")
    priorityContainer.innerHTML = `
    <h4>Priority</h4>
    <label class="radio-container">Low</label>
        <input type="radio" name="priority" value = "low">

    <label class="radio-container">Medium</label>
      <input type="radio" name="priority" value = "medium">

    <label class="radio-container">High</label>
      <input type="radio" name="priority" value = "high">
    `

    formContainer.classList.add('todo-form-container')
    container.classList.add('todos')

    formContainer.appendChild(title)
    formContainer.appendChild(titleInput)

    formContainer.appendChild(description)
    formContainer.appendChild(descriptionInput)

    formContainer.appendChild(date)
    formContainer.appendChild(dateInput)
    formContainer.appendChild(note)
    formContainer.appendChild(noteInput)
    formContainer.appendChild(priorityContainer)
    formContainer.appendChild(submit)

    wrapper.appendChild(formContainer)
    wrapper.appendChild(container)
    wrapper.appendChild(btn)
    body.appendChild(wrapper)

    btn.onclick = showForm
    submit.type = 'submit'
    submit.onclick = submitToDo

})()
const projectForm = (()=>{
    const form = document.createElement('form')
    const project = document.querySelector('.project')
    const input = document.createElement('input')
    const submit = document.createElement("button")
    submit.textContent = "✔️"
    form.classList.add('p-form')
    if(document.querySelector('.p-form')){
        const input = document.querySelector('.p-form')
        input.style.display == 'none'?input.style.display = 'flex': input.style.display = 'none'
        return
    } 
    input.type = 'text'
    input.classList.add('p-name')
    input.classList.add('enterProject')
    form.style.display = 'flex'

    submit.type = 'submit'
    submit.onclick = submitProject
    form.appendChild(input)
    form.appendChild(submit)
    project.append(form)
})
export{header,sidebar, toDoForm, projectForm}