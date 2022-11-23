import React from 'react';
import './App.css';
import Header from './Header';
import AddOrEditcontact from './Addcontact';
import Contactcard from './Contactcard';
import Contactlist from "./Contactlist";
import "./contacts.json";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ContactProvider } from './context/ContactContext'

function App() {
  return (
    <ContactProvider>
      <Header />
      <div className='main'>
        <BrowserRouter>
          <div>
            <nav className='nav'>

              <Link className='link_bar_AddContacts' to="/Contact/Add"> Add Contact</Link>
              <Link className='link_bar_ContactList' to="/Contactlist"> Contact List</Link>
              <Link className='link_bar_ContactCard' to="/Contactcard"> Contact Card</Link>

            </nav>
          </div>
          <div className='main ui-front'>
            <Routes>

              <Route path='/Contact/:task' element={<AddOrEditcontact />} />
              <Route path='/Contactlist/*' element={<Contactlist />} />
              <Route path='/Contactcard' element={<Contactcard />} />
              <Route path='/Contact/:task/:email' element={<AddOrEditcontact />} />

            </Routes>
          </div>
        </BrowserRouter>

      </div>

    </ContactProvider>

  );
}

export default App;
