import React from 'react'

export const Contact = (props) => {
    return (
        <tr>
            <th>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </th>
            <td>{props.contact.name}</td>
            <td>{props.contact.phone}</td>
            <td>{props.contact.email}</td>
        </tr>
    )
}
