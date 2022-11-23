import React, { createContext, useState } from 'react'
import "../contacts.json";

const ContactContext = createContext()

export const ContactProvider = ({ children }) => {

  const JsonData = require("../contacts.json")
  console.log(JsonData[0].name)
  const [Contact, setContact] = useState(JsonData);
  console.log(Contact);
  const [Single_contact, setSingle_contact] = useState(Contact[0])

  return <ContactContext.Provider value={{ Contact, setContact, Single_contact, setSingle_contact }}>
    {children}
  </ContactContext.Provider>
}

export default ContactContext