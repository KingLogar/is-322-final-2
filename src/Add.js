import React, { Component } from 'react';
import {toGridView} from "./navbarNavigation";

class Add extends Component{

    state = { newAcc: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.newAcc);
        this.setState({ newAcc: '' })
    }

    render(){

        return (
            <body>
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="newTask" className="title">Create New Account</label>
                <br />
                <div>All accounts are opened with a balance of 1,000 Copper.</div>
                <br />
                Account Name: <br /> <input type="text" name="newTask" value={this.state.newAcc}
                                  onChange={(e) => this.setState({ newAcc: e.target.value })} ></input> <br />
                <br />
                <button type="submit" className="taskBoard-element-button btn btn-outline-primary btn-sm" onClick={toGridView}>Add</button>
            </form>
            </body>
        );
    };
}
export default Add;