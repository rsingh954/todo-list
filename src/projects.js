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
    getName(){
    return this._name
    },
    setTodo(todo){
        this.todos.push(todo)
    }
}