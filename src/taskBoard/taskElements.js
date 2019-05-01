import React, { Component } from 'react';

class TodoElement extends Component{
    render() {
        return (<div className='taskBoard-TodoElement'>
            <div className='taskBoard-element-title'>{ this.props.title }</div>
            <div className='taskBoard-element-type'>Balance: { /*show balance*/ }</div>
            <button type="button" onClick={ () => { /*view details*/ }}>View</button>
        </div>)
    }
}

export default {
    TodoElement: TodoElement,
    InProgressElement: InProgressElement,
    ReviewElement: ReviewElement,
    DoneElement: DoneElement
}