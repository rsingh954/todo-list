export function Project(name){
    let project = Object.create(proto)
    project._id = createID()
    project._name = name
    project.todos = []
    return project
}

function createID(){
    return Math.floor(Math.random()*100)
}
const proto = {
    getName(name){
    return name == this._name
    },
    setTodo(todo){
        this.todos.push(todo)
    }
}