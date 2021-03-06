import React, { Component } from 'react';
import axios from 'axios';
import Add from './Add';
import { toGridView, toAddTask, toList } from './navbarNavigation';
import TaskBoard from './taskBoard/index';
import TaskList from './taskList/TaskList';


class App extends Component {

  state = {
    accounts: [],
    transactions: [],
    newID: 0,
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('https://my-json-server.typicode.com/bnissen24/Project2DB/accounts')
        .then(response => {
          this.setState({ accounts: response.data });
        }).catch(error => {
      this.setState({ errorMessage: error.message });
    });
    axios.get('https://my-json-server.typicode.com/bnissen24/Project2DB/transactions')
        .then(response => {
            this.setState({transactions: response.data});
        }).catch(error => {
            this.setState({errorMessage: error.message});
    });
  }

   newAcc = (name) => {

       this.setState({
            newID: this.state.accounts.length + 1
        });
        this.state.accounts.push({
            _id: this.state.newID, //unless this breaks something
            name: name,
            balance: 1000
        });
        this.state.transactions.push({
            accountId: this.state.newID,
            type: "deposit",
            amount: 1000,
            name: "Account Opened"
        });
    };

render() {
    let navbar = (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">My Accounts</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <button type="button" className="nav-link btn btn-light ml-3" onClick={toGridView} >Accounts View<span className="sr-only">(current)</span></button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn-light ml-1" onClick={toAddTask}>Add Account</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn-light ml-1" onClick={toList}>Details</button>
                    </li>
                </ul>
            </div>
        </nav>
    );

    let addTask = (
        <div id="addTask" style={{display:"none"}}>
          <Add onSubmit={this.newAcc} />
        </div>
    );

    let taskList = (
        <div id="taskList" style={{display:"none"}}>
            <TaskList accounts={this.state.accounts} transactions={this.state.transactions}/>
        </div>
    );

    return [
        navbar,
        <TaskBoard accounts={this.state.accounts} transactions={this.state.transactions}/>,
        addTask,
        taskList,
    ];
  }
}

export default App;
