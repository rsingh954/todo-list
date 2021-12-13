import { header,sidebar, toDoForm, projectForm } from "./domCreation";
import { manageLocal } from "./manageLocalStorage";
import { renderProjects, renderToDo, updateView } from "./renderDom";
import { Project } from "./projects";
import { todoFactory } from "./todo";
import { manageProjects } from "./projectManager";
import { addProjectForm } from "./events";


const init = (()=>{
    let todo = todoFactory('Work', "do shit","", 'Today', "Low")
    let todo1 = todoFactory('Eat', "make food","", 'Today', "high")
    let todo2 = todoFactory('vape', "buy liquid","", 'Today', "high")
    const defaultProject = Project('default');

    const newProject = Project('New');

    const dooProject = Project('Dooo');
    manageProjects().addProject(defaultProject)
    manageProjects().addTodo(defaultProject, todo1)
    manageProjects().addTodo(defaultProject, todo)
    
    manageProjects().addProject(newProject)
    manageProjects().addProject(dooProject)
    
    manageProjects().addTodo(newProject, todo1)
    manageProjects().addTodo(newProject, todo)

    manageProjects().addTodo(dooProject, todo)

    renderProjects()
    addProjectForm()
})()



export function start(){
    const a = document.querySelectorAll('.p-name')
    a.forEach((b) =>{
        b.addEventListener('click', e =>{
            const {target} = e
            if(target.classList.contains('active-icon')) {
                manageProjects().removeProject(target.id)
                renderProjects()
                updateView('project')
                return
            }
            let container = document.querySelector('.todos')
            removeActiveClass()
            target.classList.toggle('active')
            target.children[0].classList.toggle('active-icon')
            let todo = manageProjects().retrieveProject(target.id).todos
            container.innerHTML = ''
            renderToDo(todo)
            removeToDoBtn()//Initializes the function or it wont work
        })
    })
    
    function removeActiveClass(){
        const project  = document.querySelectorAll('.p-name')
        const icon  = document.querySelectorAll('i')
        icon.forEach((i)=>{
            i.classList.remove('active-icon')
        })

        project.forEach((p) =>{
            p.classList.remove('active')
        })
    }
    
}
export function removeToDoBtn(){
    const removeToDoBtn = document.querySelectorAll('.remove-todo') 
    removeToDoBtn.forEach((btn) => {
        btn.addEventListener('click', e =>{
            const {target} = e
            const currentProject = document.querySelector('.active')
            const project = manageProjects().retrieveProject(currentProject.id)
            console.log(target.id)
            manageProjects().removeTodo(project, target.id)
            updateView('todo')
        })
    })
    
}


start()