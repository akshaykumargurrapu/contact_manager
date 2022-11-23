import React, { useContext, useState } from "react";
import "./addcontact.css";
import ContactContext from './context/ContactContext';
import { useParams } from "react-router-dom";


const Addcontacts = () => {

    const params = useParams()
    console.log(params.task)
    console.log(params.email)

    const { Contact, setContact } = useContext(ContactContext)

    const [data, setData] = useState({ name: '', email: '', designation: '', team: '', company: '', phoneno: '' })

    const handleInputChange = (e) => {
        setData({ ...data, name: e.target.value })
    }
    const handleInputChangeemail = (e) => {
        setData({ ...data, email: e.target.value })
    }
    const handleInputChangedesignation = (e) => {
        setData({ ...data, designation: e.target.value })
    }
    const handleInputChangeteam = (e) => {
        setData({ ...data, team: e.target.value })
    }
    const handleInputChangecompany = (e) => {
        setData({ ...data, company: e.target.value })
    }
    const handleInputChangephoneno = (e) => {
        setData({ ...data, phoneno: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (data.name.length < 2)
            alert("Please enter valid Name!")
        else if (data.email.length < 6 && data.email !== "mike@gmail.com")
            alert("Please enter valid email!")
        else if (data.designation.length < 5)
            alert("Please enter valid Designation!")
        else if (data.team.length < 1)
            alert("Please enter valid Team!")
        else if (data.company.length < 1)
            alert("Please enter valid Company!")
        else if (data.phoneno.length < 10 || data.phoneno.length > 10)
            alert("Please enter valid Phone Number!")
        else {
            if (params.task === "Add") {

                if (Contact.filter((e) => e.email === data.email).length > 0) {
                    console.log("email is already in the list and it will be ")
                    console.log(Contact)
                }
                else {
                    setContact([...Contact, data])
                    alert("Successfully added the Contact");
                    setData({ name: '', email: '', designation: '', team: '', company: '', phoneno: '' }) // rpv
                }
            }
            else {
                Contact && Contact.map((contact) => {
                    if (contact.email === data.email) {
                        console.log("qwertyu")
                        contact.name = data.name
                        contact.team = data.team
                        contact.designation = data.designation
                        contact.company = data.company
                        contact.phoneno = data.phoneno
                        console.log(Contact)
                    }
                })
                alert("Successfully Edited the Contact");
                setData({ name: '', email: '', designation: '', team: '', company: '', phoneno: '' })
            }
        }
    }


    return (
        <div >

            <form onSubmit={handleSubmit}>
                <div className="Addcontacts" >{params.task === "Add" ? "Add" : "Edit"} Contacts
                    <span><button className="btn" type='submit' > <i className="material-icons"> check</i></button></span></div>
                <table border={0} align="center">
                    <tbody>
                        <tr>
                            <div className="name-input">
                                <td>Name : </td>
                                <td><input type="text"
                                    onChange={handleInputChange} value={data.name} alt="name"
                                    placeholder="Name" /></td>

                            </div>
                        </tr>
                        <tr>
                            <div className="name-input">
                                <td>
                                    email :
                                </td>
                                <td><input type="email" onChange={handleInputChangeemail}
                                    value={data.email = params.task === 'Edit' ? params.email : data.email} alt="email"
                                    placeholder="email" /></td>
                            </div>
                        </tr>
                        <tr>
                            <div className="name-input">
                                <td align="left">
                                    Designation :
                                </td>
                                <td>
                                    <input type="text" onChange={handleInputChangedesignation}
                                        value={data.designation}
                                        placeholder="Designation" />
                                </td>
                            </div>
                        </tr>
                        <tr>
                            <div className="name-input">
                                <td>
                                    Team :
                                </td>
                                <td>

                                    <input type="text" onChange={handleInputChangeteam}
                                        value={data.team} alt="email"
                                        placeholder="Team" />
                                </td>
                            </div>
                        </tr>
                        <tr>
                            <div className="name-input">
                                <td>
                                    Company :
                                </td>
                                <td>
                                    <input type="text" onChange={handleInputChangecompany}
                                        value={data.company}
                                        placeholder="Company" />
                                </td>
                            </div>
                        </tr>
                        <tr>
                            <div className="name-input">
                                <td>
                                    Phone-No :
                                </td>
                                <td>
                                    <input type="number" onChange={handleInputChangephoneno}
                                        value={data.phoneno}
                                        placeholder="Phone-No" />
                                </td>
                            </div>
                        </tr>
                    </tbody>
                </table>

            </form>
        </div>
    );
};
export default Addcontacts;