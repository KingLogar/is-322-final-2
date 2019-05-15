import React, { Component } from 'react';

class AccountElement extends Component{

    delete = (id) => {

        let index = this.props.accounts.findIndex(i => i._id === id);
        let splice = this.props.accounts.splice(index, 1);

        //this.setState({accounts: splice});
        //^^For some reason this was emptying the list so it's disabled
    };

    render() {

        return (<div className='taskBoard-TodoElement'>
            <div className='taskBoard-element-title'>
                <h4>{ this.props.title }</h4>
            </div>
            <div className='taskBoard-element-title'>Balance: { this.props.bal }</div>
            <br/>
            <button type="button">Delete</button>
            </div>)
    }
}

export default {
    AccountElement: AccountElement
}