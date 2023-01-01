import React, { Component } from 'react';
import AddUser from './components/AddUser';
import Users from './components/Users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[]
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser(newUser) {
    let updatedUsers = this.state.users;
    updatedUsers.push(newUser);
    this.setState({
      users: updatedUsers
    });
  }

  deleteUser(id) {
    let updatedUsers = this.state.users;
    updatedUsers = updatedUsers.filter(user => user.id !== id);
    this.setState({users: updatedUsers});
  }
  
  render() {
    return (
      <div className="container">
        <h1>React First Project - Add & Delete Users</h1>
        <hr />
        <AddUser addUser={this.addUser}/>
        <hr />
        <Users deleteUser = {this.deleteUser} users = {this.state.users}/>
      </div>
    )
  }
}

export default App;
