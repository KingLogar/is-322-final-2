import React, { Component } from 'react';
import TaskBoard from './taskBoard/index';
import axios from 'axios';
import Add from './Add';
import { toGridView, toTaskList, toAddTask } from './navbarNavigation';

class App extends Component {

  state = {
    accounts: [],
    newTaskID: 0
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
  }

  accountsMoving = {
      redirect: (id) => {
          //Something will go here, maybe.
      }
  }

  render() {
    let navbar = (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">My Todo List</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <button type="button" className="nav-link btn btn-light ml-3" onClick={toGridView} >Grid View <span className="sr-only">(current)</span></button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-light ml-1" onClick={toTaskList}>Task List</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-light ml-1" onClick={toAddTask}>Add Task</button>
              </li>
            </ul>
          </div>
        </nav>
    );



    let addTask = (
        <div id="addTask" style={{display:"none"}}>
          <Add onSubmit={this.newTask} />
        </div>
    );

    return [
        navbar,
        <TaskBoard accounts={this.state.accounts} />,
        addTask
    ];
  }
}

export default App;
