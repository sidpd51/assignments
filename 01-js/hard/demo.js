class Todo {
    constructor(){
      this.todos=[]
    }
  
    add(todo){
      this.todos.push(todo)
    }
  
    remove(indexOfTodo){
      this.todos.splice(indexOfTodo,1)
    }
  
    update(index, updatedTodo){
      if(index>=0 && index<this.todos.length){
        this.todos[index]=updatedTodo
      }
    }
  
    getAll(){
      return this.todos
    }
  
    get(indexOfTodo){
      if(indexOfTodo>=0 && indexOfTodo<this.todos.length){
        return this.todos[indexOfTodo]
      }
    }
  
    clear(){
      this.todos=[]
    }
  }
const todos = new Todo()
todos.add('go to gym')
todos.add('go to library')
todos.add('go to office')
todos.update(4, 'invalid task')
console.log(todos.getAll())