export class manageLocal{
    static getProjects(){
        let projects;
        if(localStorage.getItem('projects') == null){
            projects = []
        }else{
            projects = JSON.parse(localStorage.getItem('projects'))
        }
        return projects
    }
    static getCompleted(){
        let completedProjects;
        if(localStorage.getItem('complete') == null){
            completedProjects = []
        }else{
            completedProjects = JSON.parse(localStorage.getItem('complete'))
        }
        return completedProjects
    }
}
