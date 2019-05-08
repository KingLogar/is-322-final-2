import React, { Component } from 'react';
import TaskBoard from './taskBoard/index';
import axios from 'axios';
import Add from './Add';
import {BrowserRouter, Route} from "react-router-dom";
import PageTabs from "./PageTabs";

class App extends Component {

  state = {
    accounts: [],
    currentPage: '/',
    newAccID: 0
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

  render() {
    let navbar = (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1>My Accounts</h1>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <BrowserRouter>
                <PageTabs/>
                <div>
                    <Route path="/" exact component={TaskBoard} />
                    <Route path="/add" componenet={Add} />
                </div>
            </BrowserRouter>
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
