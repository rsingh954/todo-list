import { removeToDoBtn, start } from ".";
import { manageLocal } from "./manageLocalStorage";

    export function addProject(project){
        const projects = manageLocal.getProjects()
        if(projects.filter(p => p._name === project._name).length > 0) return "Exists"
        projects.push(project)
        localStorage.setItem('projects', JSON.stringify(projects))
    }
    export function removeProject(title){
        const projects = manageLocal.getProjects()
        projects.filter((p, i) => {
            if(p._name == title){
                projects.splice(i, 1)
                localStorage.setItem('projects', JSON.stringify(projects))
            }
        })
    }
    export function addTodo(project, todo){
        const projects = manageLocal.getProjects()
        if(projects.find((p) => p._name == project._name).todos.find((t) => t._title == todo._title)) return
        else{
        projects.find((p) => p._name == project._name).todos.push(todo)
        localStorage.setItem('projects', JSON.stringify(projects))
        }

    }
    export function removeTodo(project, title){
        const projects = manageLocal.getProjects()
        let [filtered]= projects.filter((f) => f._name === project._name)
        for(let i = 0; i <= projects.length-1; i++){
            if(projects[i]._id === filtered._id){
                for(let j = 0; j <= projects[i].todos.length-1; j++){
                    if(projects[i].todos[j]._title == title){
                        projects[i].todos.splice(j, 1)
                        localStorage.setItem('projects', JSON.stringify(projects))
                        start()
                        removeToDoBtn()
                    }
                }
            }
        }
    }
    export function retrieveProject(id){
        const projects = manageLocal.getProjects()
        let [project] = projects.filter((p) => p._id == id)

        return project
    }

    

