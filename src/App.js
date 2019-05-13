import React, { Component } from 'react';
import axios from 'axios';
import Add from './Add';
import { toGridView, toAddTask, toList } from './navbarNavigation';
import TaskBoard from './taskBoard/index';
import TaskList from './taskList/TaskList';
import AccountElement from './taskBoard/taskElements';


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
  //<PageTabs accounts={this.state.accounts}/>

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

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <button type="button" className="nav-link btn btn-light ml-3" onClick={toGridView} >Accounts View<span className="sr-only">(current)</span></button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn-light ml-1" onClick={toAddTask}>Add Account</button>
                    </li>
                </ul>
            </div>
        </nav>
    );

    let taskElement =(
        <AccountElement onSubmit={this.toInfo}/>
    )

    let addTask = (
        <div id="addTask" style={{display:"none"}}>
          <Add onSubmit={this.newAcc} />
        </div>
    );

    let taskList = (
        <div id="taskList" style={{display:"none"}}>
            <TaskList />
        </div>
    );

    return [
        navbar,
        <TaskBoard accounts={this.state.accounts} />,
        addTask,
        taskList,
    ];
  }
}

export default App;
