import React, { Component } from 'react';
import "./App.css";
import { v4 as uuidv4 } from "uuid";

export class App extends Component {
    state = {
        todoArr: [{
            id: uuidv4(),
            todo: "wash dishes"
        },
        {
            id: uuidv4(),
            todo: "clean the living"
        },
        {
            id: uuidv4(),
            todo: "do laundry"
        }
        ],
        newTodo: "",
        error:"",
    };
    handleInputChange = (event) => {
        this.setState({
            newTodo: event.target.value
        });
    };
    showTodo = () => {
        return (
            <ul>
                {this.state.todoArr.map(({ id, todo }) => (
                    <li key={id}>{todo}</li>
                ))};
            </ul>
        )
    };
    handleSubmit = (event) => {
        event.preventDefault();

        const isDuplicate = this.state.todoArr.some(function (element) {
            return (
                element.todo.toLowerCase() === event.target.newTodo.value.toLowerCase()
            );
        });
        const isNotEmpty = e.target.newTodo.value.trim();

        if(!isNotEmpty) {
            this.setState({
                error: "Can not add an empty todo!"
            })
        }
        else {
            if(isDuplicate) {
                this.setState({
                    error: "Can not add a duplicate todo!",
                    newTodo: ""
                })
            }
            else {
                let newArr = [
                    ...this.state.todoArr,
                    { id: uuidv4(), todo: this.state.newTodo }
                ]
                this.setState({
                    todoArr: newArr,
                    newTodo: "",
                    error: ""
                })
            }
        }
    }

    render() {
        const { newTodo } = this.state;
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <label>Add Todo:</label>
                    <input placeholder='Enter todo here' name='newTodo' value={newTodo} onChange={this.handleInputChange}></input>
                    <button>Submit</button>
                    <p style={{ color: "red" }}>{this.state.error}</p>
                </form>
                {this.showTodo()}
            </div>
        );
    };
};

export default App;
