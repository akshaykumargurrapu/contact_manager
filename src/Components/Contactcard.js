
import React, { useContext } from 'react';
import "./contactlist.css";
import ContactContext from './context/ContactContext';

const Contactcard = () => {
    const { Single_contact } = useContext(ContactContext)
    console.log(Single_contact, "12345")
    return (
        <>
            <div className="ContactCard">
                <h2> Contact Card</h2>
                <table align='center'>
                    <tbody >
                        <tr>
                            <td align='left'>
                                Name
                            </td>
                            <td>:</td>
                            <td align='left'>
                                {Single_contact.name}
                            </td>
                        </tr>
                        <tr>
                            <td align='left'>
                                email
                            </td>
                            <td>:</td>
                            <td align='left'>
                                {Single_contact.email}
                            </td>
                        </tr>
                        <tr>
                            <td align='left'>
                                Designation
                            </td>
                            <td>:</td>
                            <td align='left'>
                                {Single_contact.designation}
                            </td>
                        </tr>
                        <tr>
                            <td align='left'>
                                Team
                            </td>
                            <td>:</td>
                            <td align='left'>
                                {Single_contact.team}
                            </td>
                        </tr>
                        <tr>
                            <td align='left'>
                                Company
                            </td>
                            <td>:</td>
                            <td align='left'>
                                {Single_contact.company}
                            </td>
                        </tr>
                        <tr>
                            <td align='left'>
                                Phone Number
                            </td>
                            <td>:</td>
                            <td align='left'>
                                {Single_contact.phoneno}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    );

}

export default Contactcard;
