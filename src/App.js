import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        username: 'kiglaze'
    };

    changeUsernameHandler = (event) => {
        this.setState({username: event.target.value});
    };

    render() {
        const style = {
            margin: '0em 3em 0em 3em'
        };
        return (
            <div style={style}>
                <h1>Assignment 1</h1>
                <UserInput changed={this.changeUsernameHandler} name={this.state.username} />
                <UserOutput username={this.state.username} />
                <UserOutput username={this.state.username} />
            </div>
        );
    }
}

export default App;
