import React, { Component } from 'react';


class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove() {
        this.props.remove(this.props.id);
    };
    toggleForm(){
        this.setState({ isEditing: !this.state.isEditing })
    };
    handleEdit(evt){
        evt.preventDefault();
        this.props.edit(this.props.id, this.state.task)
        this.setState({isEditing: false})
    };
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleToggle(evt){
        this.props.toggleCompleted(this.props.id)
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleEdit} className='Todo-edit-form'>
                        <input 
                        type='text'
                        value={this.state.task}
                        name='task'
                        onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className='Todo-task'>
                    <li 
                    className={this.props.completed ? 'completed' : ''}
                    onClick={this.handleToggle}>
                        {this.props.task}
                    </li>
                    <button onClick={this.handleRemove}>x</button>
                    <button onClick={this.toggleForm}>e</button>
                </div>
            )
        }
        return result;
    }
}

export default ToDoItem;