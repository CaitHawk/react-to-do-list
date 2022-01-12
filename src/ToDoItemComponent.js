import React, { Component } from 'react';
import './itemStyle.css';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
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
    toggleForm() {
        this.setState({ edit: !this.state.edit })
    };
    handleEdit(evt) {
        evt.preventDefault();
        this.props.edit(this.props.id, this.state.task)
        this.setState({ edit: false })
    };
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleToggle(evt) {
        this.props.toggleCompleted(this.props.id)
    }
    render() {
        let result;
        if (this.state.edit) {
            result = (
                <div>
                    <form onSubmit={this.handleEdit} className='editForm'>
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
                <div className='itemTask'>
                    <li
                        className={this.props.completed ? 'completed' : ''} onClick={this.handleToggle}>
                        {this.props.task}
                    </li>
                    <div className="itemBtns">
                        <i className="fas fa-trash-alt trash" onClick={this.handleRemove}></i>
                        <i className="fas fa-edit edit" onClick={this.toggleForm}></i>
                    </div>
                </div>
            )
        }
        return result;
    }
}

export default ToDoItem;