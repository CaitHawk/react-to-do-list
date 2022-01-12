import React, { Component } from 'react';
import ToDoForm from './ToDoFormComponent';
import ToDoItem from './ToDoItemComponent';
import './listStyle.css'


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
    update(id, updatedTask) {
        const updatedTodos = this.state.toDoList.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo;
        })
        this.setState({ toDoList: updatedTodos })
    }

    toggleCompleted(id) {
        const updatedTodos = this.state.toDoList.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        })
        this.setState({ toDoList: updatedTodos })
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
            <div className="listContainer">
                <div className="list">
                    <h1 className="listTitle">Today:</h1>
                    <div className="listItems">
                    <ToDoForm createNewTodo={this.createNewTodo} className="listForm" />
                    <ul>{list}</ul>
                    </div>
                </div>
            </div>
        )
    }
};

export default ToDoList;