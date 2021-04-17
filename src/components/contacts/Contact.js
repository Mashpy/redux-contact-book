import React from 'react'
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

export const Contact = ({contact}) => {
    const {name, phone, email, id} = contact;
    return (
        <tr>
            <th>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </th>
            <td>
                <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`}>
                    <span className="material-icons mr-2">edit</span>
                </Link>
                <Link to="#">
                    <span className="material-icons text-danger">remove_circle</span>
                </Link>
            </td>
        </tr>
    )
}

export default Contact