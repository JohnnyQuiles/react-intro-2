import React, { Component } from 'react';
import "./App.css";

export class AppList extends Component {
    state = {
        list: [{
            id: 1,
            item: "tp"
        },
        {
            id: 2,
            item: "paper towel",
        },
        {
            id: 3,
            item: "dish soap",
        }
        ],
    };
    showItemList = () => {
        return (
            <ul>
                {this.state.list.map(({ id, item }) => (
                    <li key={id}>{item}</li>
                ))}
            </ul>
        )
    };
    render() {
        return (
            <div className="App">
                <h1>Hello</h1>
                <p>We're going to MAP data</p>
                <ul>
                    {this.state.list.map((element) => {
                        return <li key={element.id}>{element.item}</li>
                    }
                    )}
                    <br />
                    {/* with destructing */}
                    {this.state.list.map(({ id, item }) => {
                        return <li key={id}>{item}</li>
                    }
                    )}
                    <br />
                    {/* implicit return */}
                    {this.state.list.map(({ id, item }) => (
                        <li key={id}>{item}</li>
                    ))}
                    <br />
                </ul>
                {/* function block */}
                {this.showItemList()}
            </div>
        );
    }
};

export default AppList;
