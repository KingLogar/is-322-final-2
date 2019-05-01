import React, { Component } from 'react';

import {toTodo,toInProgress,toReview,toDone} from './changeColunmInSmallScreen';

class TaskBoard extends Component{
    render() {
        let accounts = this.props.accounts;

        let menu = (
            <div className="btn-group btn-block taskBoard-dropManu-frame">
                <button id="taskBoard-dropManu-button" type="button" className="btn btn-light btn-lg btn-block dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                    To do
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
                    <div>{/*accounts*/}</div>
                </div>
            </div>
        );

        return [menu,taskBoard]
    }
}

export default TaskBoard;
