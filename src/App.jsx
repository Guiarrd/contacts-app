import React from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import './App.scss';

const URL = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
const compareStringsIgnoringCase = (str1, str2) => str1.toLowerCase().includes(str2.toLowerCase());

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filteredContacts: [],
      search: '',
      sortBy: '',
      buttonSelected: false
    }
  }

  async componentDidMount() {
    const response = await fetch(URL)
      .then(resp => resp.json())
      .then(data => data)
      .catch(err => console.log(err));

    this.setState({
      contacts: response,
      filteredContacts: response
    })
  }

  handleSearch = async content => {
    let { contacts, sortBy } = this.state;
    sortBy = sortBy ? sortBy : 'name';
    const filteredContacts = contacts.filter(contact => 
      compareStringsIgnoringCase(contact[sortBy], content));
      
    this.setState({
      filteredContacts: filteredContacts, 
      search: content
    });
  }
  
  handleSortBy = property => {
    const { filteredContacts, sortBy } = this.state;
    if (sortBy === property) {
      this.setState({sortBy: ''});
    } else {
      this.setState({sortBy: property});
    }

    let sortedContacts = filteredContacts.sort((item1, item2) => {
      return item2[property] > item1[property] ? -1 : 1
    });
    this.setState({filteredContacts: sortedContacts})
  }

  render() {
    const { filteredContacts, search, sortBy } = this.state;
    return (
      <div className="app" data-testid="app">
        <Topbar />
        <Filters 
          search={search} 
          sortBy={sortBy}
          handleSearch={this.handleSearch}
          handleSortBy={this.handleSortBy}
        />
        <Contacts contacts={filteredContacts} sortBy={sortBy} />
      </div>
    )
  }
}

export default App;
