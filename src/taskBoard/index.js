import React, { Component } from 'react';
import Element from './taskElements';

class AccountBoard extends Component{
    render() {
        let accs = this.props.accounts;
        let accounts = [];

        for (let acc of accs) {

            accounts.push(
                <Element.AccountElement title={acc.name} bal={acc.balance} id={acc.id} redirect={this.props.action.redirect}/>
                );
            }


        let menu = (
            <div className="btn-group btn-block taskBoard-dropManu-frame">
                <button id="taskBoard-dropManu-button" type="button" className="btn btn-light btn-lg btn-block dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                    Accounts
                </button>
            </div>
        );
        let accBoard = (
            <div id="gridView" className="taskBoard">
                <div id="taskBoard-todoColumn" className="taskBoard-Column taskBoard-darker" style={{display: "block"}}>
                    <div className="taskBoard-TodoTitle">
                        Accounts
                    </div>
                    <div>{accounts}</div>
                </div>
            </div>
        );

        return [menu,accBoard]
    }
}

export default AccountBoard;
