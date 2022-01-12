import React, { Component } from 'react';
import ToDoForm from './ToDoFormComponent';
import ToDoItem from './ToDoItemComponent';


class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toDoList: []
        }
        this.createNewTodo = this.createNewTodo.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this)
        this.toggleCompleted = this.toggleCompleted.bind(this)
    }
    createNewTodo(td) {
        this.setState({
            toDoList: [...this.state.toDoList, td]
        })
    }

    remove(id) {
        this.setState({
           toDoList: this.state.toDoList.filter(i => i.id !== id) 
        })
    }
    update(id, updatedTask){
        const updatedTodos = this.state.toDoList.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
            return todo;
        })
        this.setState({toDoList: updatedTodos})
    }

    toggleCompleted(id){
        const updatedTodos = this.state.toDoList.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        })
        this.setState({toDoList: updatedTodos})
    }

    render() {
        const list = this.state.toDoList.map(item =>
            <ToDoItem
                task={item.task}
                key={item.id}
                id={item.id}
                remove={this.remove}
                edit={this.update}
                completed={item.completed}
                toggleCompleted={this.toggleCompleted}
                />
        )
        return (
            <div>
                <h1>ToDo List</h1>
                <ul>{list}</ul>
                <ToDoForm createNewTodo={this.createNewTodo} />
            </div>
        )
    }
};

export default ToDoList;