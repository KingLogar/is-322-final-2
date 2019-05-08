import React from 'react';
import {Link} from 'react-router-dom';

class PageTabs extends React.Component {
    state ={
        currentPage: '/',
        accounts: this.props.accounts
    }

    isActiveTab(tab){
        return (tab === this.state.currentPage) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tab){
        this.setState({currentPage: tab})
    }

    render(){
        return(
            <ul className="nav page-tabs">
                <li className="nav-item">
                    <Link className={this.isActiveTab('/')} to="/" onClick={event=>this.onTabClick(event, '/')}>
                        Accounts View
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={this.isActiveTab('/')} to="/add" onClick={event=>this.onTabClick(event, '/add')}>
                        Add Account
                    </Link>
                </li>
            </ul>
        )
    }
}

export default PageTabs;