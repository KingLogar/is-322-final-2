
import React from 'react';

import TaskItem from './TaskItem';

class TaskList extends React.Component {

  state = {
    log: []
  };

  //Will I really need this??
  findAcc = (account) => {

      const acc = this.props.accounts.find(a => a.id === account.id);

      return acc;
  };

  findLog = (account) => {
      const log = this.props.transactions.filter(b => b.accountId === account.id);

      this.setState({log: log});
  }

  updateResults = () => {

};


  render() {


    const tasks = (this.state.filteredTasks.length) ? this.state.filteredTasks : this.props.tasks;

    const taskItems = tasks.map(task => {
      return <TaskItem task={task} key={task.id} markDone={this.markDone} />
    });

    let sort = (<div id="container">
      <span id="left">
        <h3>Sort</h3>
        <select value={this.setState.sort} onChange={(e) => this.setState({ sort: e.target.value })}>
          <option value="Default">Pick An Option</option>
          <option value="Title">Title</option>
          <option value="Status">Status</option>
          <option value="Type">Type</option>
        </select>
      </span>
      <span id="center">
        <h3>Status</h3>
        <select value={this.setState.filterB} onChange={(e) => this.setState({ filterB: e.target.value })}>
          <option value="Default">Pick An Option</option>
          <option value="todo">To do</option>
          <option value="In-Progress">In Progress</option>
          <option value="Review">Review</option>
          <option value="Done">Done</option>
        </select>
      </span>
      <span id="right">
        <h3>Type</h3>
        <select value={this.setState.filterA} onChange={(e) => this.setState({ filterA: e.target.value })}>
          <option value="Default">Pick An Option</option>
          <option value="Task">Task</option>
          <option value="Feature">Feature</option>
          <option value="Review">Review</option>
          <option value="Done">Done</option>
        </select>
      </span>
      <div>
        <button onClick={this.updateResults}>Refine</button>
      </div>
    </div>);

    return (

        <div id="sort"> { }
          <ul className="task-list list-group">
            {  }
          </ul>
        </div>
    )
  }

}

export default TaskList;