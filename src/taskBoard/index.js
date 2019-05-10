import React, { Component } from 'react';
import Element from './taskElements';

class AccountBoard extends Component{
    render() {
        let accounts = this.props.accounts;
        let accountsArr = [];

        console.log(accounts);

        for (let account of accounts) {

            accountsArr.push(
                <Element.AccountElement title={account.name} bal={account.balance} id={account._id} />
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
            <div id="taskBoard-todoColumn" className="taskBoard-Column taskBoard-darker" style={{display: "block"}}>
                <div className="taskBoard-TodoTitle">
                    Accounts
                </div>
                <div>{accountsArr}</div>
            </div>
        );

        return [menu,accBoard]
    }
}

export default AccountBoard;
