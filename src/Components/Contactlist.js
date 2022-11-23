import React, { useContext, useRef, useState } from "react";
import "./Contactcard.css";
import user from "../images/user.png";
import { Link, Routes, Route } from "react-router-dom";
import Contactcard from "./Contactcard";
import ContactContext from './context/ContactContext';


const Contactlist = () => {

  const { Contact, setContact, setSingle_contact } = useContext(ContactContext)
  const [SearchTerm, setSearchTerm] = useState("")
  const remove = (item) => {
    console.log(item)
    if (item !== "mike@gmail.com") {
      let filteredArr = Contact.filter((e) => e.email !== item);
      console.log(filteredArr)
      setContact(filteredArr)

    }
  }



  const searchhandler = (e) => {
    setSearchTerm(e.target.value)

  }

  const rendercontacts = Contact && Contact.filter(cont => cont.name.startsWith(SearchTerm) || cont.email.includes(SearchTerm)).map(contact => {
    return <>
      <div>
        <span>
          <img src={user} width="40'px" ></img>
          {contact.name} <br></br>
          <nav className="link_email">
            <Link className="link_email" to="/contactcard/"
              onClick={() => setSingle_contact(Contact.filter((e) => e.email === contact.email)[0])} >
              {contact.email}</Link>
            <Routes >
              <Route path="/contactcard" element={<Contactcard />} />
            </Routes>
          </nav>
          <Link to={`/Contact/Edit/${contact.email}`} className='editbutton' ><i className="material-icons" > edit</i></Link>
          <button className='trashbutton'
            onClick={() => remove(contact.email)}><i className="material-icons" > delete</i></button>
          <br></br>

        </span>
      </div>
      <hr></hr>
    </>
  })
  return (
    <>
      <div className='Contactlist'>
        Contact List<br></br>
        <input type="search" placeholder="Search Contact" value={SearchTerm}
          onChange={searchhandler} alt="name"></input>
        <div className='ContactRender'>
          {rendercontacts}
        </div>
      </div>

    </>
  );
}

export default Contactlist;





