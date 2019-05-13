import React, { Component } from 'react';

class AccountElement extends Component{

    render() {

        return (<div className='taskBoard-TodoElement'>
            <div className='taskBoard-element-title'>
                <h4>{ this.props.title }</h4>
            </div>
            {console.log(this.props.name)}
            <div className='taskBoard-element-title'>Balance: { this.props.bal }</div>
            <br/>
            <button type="button" onClick= {  }>Details</button>
            </div>)
    }
}

export default {
    AccountElement: AccountElement
}