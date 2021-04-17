import React, {useState} from 'react'
import {useSelector} from "react-redux";
import Contact from "./Contact";

const Contacts = () => {
    const [selectAll, setSelectAll] = useState(false);
    const contacts = useSelector((state) => state.contact.contacts);
    return (
        <div>
            <table className="table shadow">
                <thead className="bg-danger text-white">
                    <tr>
                    <th scope="col">
                        <div className="custom-control custom-checkbox">
                            <input 
                            id="selectAll" 
                            type="checkbox" 
                            className="custom-control-input"
                            value={selectAll}
                            onClick={()=> setSelectAll(!selectAll)}
                            />
                            <label htmlFor="selectAll" className="custom-control-label"></label>
                        </div>
                    </th>
                    <th >Name</th>
                    <th >Phone</th>
                    <th >Email</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        contacts.map((contact) => (
                            <Contact contact={contact} key={ contact.id } selectAll={selectAll}/>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
