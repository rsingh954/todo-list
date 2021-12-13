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
    
}
