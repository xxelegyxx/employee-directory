import React, { Component } from 'react';
import './App.css';
import User from './User/User';
import Header from './Header/Header';

class App extends Component  {
  state = {
    users: [
      {
        id: 1,
        image: "",
        name: "Joe Wood",
        phone: "(666)-666-6666",
        email: "joey@joey.com",
        dob: "01-01-2000"
      },
      {
        id: 2,
        image: "",
        name: "Ray Strong",
        phone: "(777)-777-7777",
        email: "ray@ray.com",
        dob: "12-19-1996"
      },
      {
        id: 3,
        image: "",
        name: "Georgie Wood",
        phone: "(555)-555-5555",
        email: "georgie@georgie.com",
        dob: "08-18-2000"
      }
    ],
    search : ""
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value.substr(0, 30) });
  }

  render() {
    console.log('this', this)
    let filteredUsers = this.state.users.filter(
      (users) => {
        return (users.name.toLowerCase()).indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="App">
        <nav className="Nav">
          <p className="NavTitle">Employee Directory</p>
          <p className="NavInstructions">Use the search box to narrow your results.</p>
        </nav>

        <input
          type='text'
          placeholder='Search name'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />

        <Header />
        {filteredUsers.map(user => {
          return (
            <User
              image={user.image}
              name={user.name}
              phone={user.phone}
              email={user.email}
              dob={user.dob}
              key={user.id} />
          );
        })}
      </div>
    );
  }
}

export default App;