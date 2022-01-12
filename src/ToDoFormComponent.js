import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './formStyle.css'


class ToDoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            task: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({ [evt.target.name] : evt.target.value })
    }
    handleSubmit(evt){
        evt.preventDefault()
        let newTodo = ({...this.state, id: uuidv4(), completed: false});
        this.props.createNewTodo(newTodo);
        this.setState({task: ""})

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="newTaskForm" autoComplete='off'>
                {/* <label htmlFor='newItem'>New Todo:</label> */}
                <input
                    type='text'
                    name='task'
                    value={this.state.task}
                    id='newItem'
                    onChange={this.handleChange}
                    placeholder="New Entry"
                />
                <button>Add</button>
            </form>
        )
    }
};

export default ToDoForm;