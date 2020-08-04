import React from 'react';
import './App.css';
import UserCard from './UserCard';
import { userAPI } from './Constants';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
constructor() {
  super();
  this.state = {
    userData: ''
  }
}

submit = searchTerm => {
  this.setState({
    userData: null
  });

  this.getUser(searchTerm)
}

getUser = username => {
  axios.get(`${userAPI}${username}`)
    .then(success => {
      this.setState({
        userData: success.data
      });
    })
    .catch(fail => {
      console.log('failed');
      debugger
    })
}


render() {
  return (
    <div className='App'>
      <h1>Github User Card</h1>
      <SearchBar submit={this.submit}/>
      {this.state.userData === null && <p>Fetching user...</p>}
      {this.state.userData && <UserCard userData={this.state.userData} />}
    </div>
  )
}
}

export default App;
