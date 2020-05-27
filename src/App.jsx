import React, { useState, useEffect } from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import './App.scss';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');
  
  useEffect(() => {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
    .then(resp => resp.json())
    .then(data => {
      setContacts(data);
      setFilteredContacts(data);
    })
  }, [])
  
  const toggleFilter = property => sortBy === property ? setSortBy('') : setSortBy(property);
  
  const handleSearch = content => {
    const filterContacts = contacts.filter(contact => {
      if (sortBy === 'admissionDate') {
        return new Date(contact[sortBy]).toLocaleDateString('pt-BR').includes(content);
      }
      
      return contact[sortBy].toLowerCase().includes(content.toLowerCase());
    });
    
    setFilteredContacts(filterContacts);
    setSearch(content);
  }

  const handleSortBy = property => {
    toggleFilter(property);
    let sortedContacts = filteredContacts.sort((item1, item2) => {
      return item2[property] > item1[property] ? -1 : 1
    });
    
    setFilteredContacts(sortedContacts);
  }
  
  return (
    <div className="app" data-testid="app">
      <Topbar />
      <Filters 
        search={search} 
        sortBy={sortBy}
        handleSearch={handleSearch}
        handleSortBy={handleSortBy}
      />
      <Contacts 
        contacts={filteredContacts} 
        sortBy={sortBy} 
      />
    </div>
  )
}

export default App;
