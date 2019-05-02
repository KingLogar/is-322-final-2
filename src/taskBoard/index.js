import React, { Component } from 'react';
import Element from './taskElements';
import {toTodo,toInProgress,toReview,toDone} from './changeColunmInSmallScreen';

class TaskBoard extends Component{
    render() {
        let accs = this.props.accounts;
        let accounts = [];

        for (let acc of accs) {

            accounts.push(
                <Element.TodoElement title={acc.name} bal={acc.balance} id={acc.id} /*startOnclick={this.props.action.startOnclick*/} />
                );
            }


        let menu = (
            <div className="btn-group btn-block taskBoard-dropManu-frame">
                <button id="taskBoard-dropManu-button" type="button" className="btn btn-light btn-lg btn-block dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                    Accounts
                </button>
                <div className="dropdown-menu taskBoard-dropManu">
                    <button className="dropdown-item btn-lg" type="button" onClick={toTodo}>To do</button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item btn-lg" type="button" onClick={toInProgress}>In Progress</button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item btn-lg" type="button" onClick={toReview}>Review</button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item btn-lg" type="button" onClick={toDone}>Done</button>
                </div>
            </div>
        );
        let taskBoard = (
            <div id="gridView" className="taskBoard">
                <div id="taskBoard-todoColumn" className="taskBoard-Column taskBoard-darker" style={{display: "block"}}>
                    <div className="taskBoard-TodoTitle">
                        Accounts
                    </div>
                    <div>{}</div>
                </div>
            </div>
        );

        return [menu,taskBoard]
    }
}

export default TaskBoard;
