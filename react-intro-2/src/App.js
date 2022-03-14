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
        ]
    };
    handleInputChange = (event) => {
        this.setState({
            newTodo: event.target.value
        });
    };
    showTodo = () => {
        return (
            <ul>
                {this.state.todoArr.map(({ todo, id }) => (
                    <li key={id}>{todo}</li>
                ))}
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

        const isNotEmpty = event.target.newTodo.value.trim();

        if (isNotEmpty) {
            if (isDuplicate) {
                this.setState({
                    newTodo: "",
                    errorMessage: "No duplicate!",
                });
            } else {
                let newArray = [
                    ...this.state.todoArr,
                    { id: uuidv4(), todo: this.state.newTodo },
                ];

                this.setState({
                    todoArr: newArray,
                    newTodo: "",
                    errorMessage: "",
                });
            }
        } else {
            console.log("handleOnSubmit Error:");
            this.setState({
                newTodo: "",
                errorMessage: "Cannot submit an empty field",
            });
        }
    };

    render() {
        const { newTodo } = this.state;
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <label>Add Todo:</label>
                    <input placeholder='newTodo' value={newTodo} onChange={this.handleInputChange}></input>
                    <button>Submit</button>
                    <p style={{ color: "red" }}>(this.state.errorMessage)</p>
                </form>
                {this.showTodo()}
            </div>
        );
    };
};

export default App;
