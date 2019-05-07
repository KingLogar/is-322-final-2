import React, { Component } from 'react';

class AccountElement extends Component{
    render() {
        return (<div className='taskBoard-TodoElement'>
            <div className='taskBoard-element-title'>{ this.props.title }</div>
            <div className='taskBoard-element-type'>Balance: { /*show balance*/ }</div>
            <button type="button" onClick={ () => { /*view details*/ }}>View</button>
        </div>)
    }
}

export default {
    AccountElement: AccountElement
}