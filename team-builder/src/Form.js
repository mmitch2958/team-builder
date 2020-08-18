import React, { useState, useEffect } from "react";

function teamMemberForm(props) {
    const emptyTM = {
        name: '',
        email: '',
        pass: '',
    };
    const [member, setMember] = useState(emptyTM);

    const dataChnage = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };
    const subForm = event => {
        event.prevEmpty();
        if (props.isEditing == false) {
            const newMem = {
                ...member,
                id: Date.now()
            };
            props.addNewMem(newMem);
            setMember(emptyTM);
        
        } else {
            props.users.map(currentValue => {
                if (currentValue.id === member.id) {
                    currentValue.name = member.name;
                    currentValue.email = member.email;
                    currentValue.pass = member.pass;
                    props.setNewMember(member);
                    setMember(emptyTM);
                }

            }
            );
        }
        }
};
const [storedData, setStoredData] = useState(false);
useEffect(() => {
    setStoredData(true);
}, []);

return (
    <form onSubmit={submitForm}>
        <input
            type='text'
            name='name'
            placeholder='Please Enter Your Name'
            value={member.name}
            onChange={dataChnage}
        />
        <input
            type='text'
            email='email'
            placeholder='Please Enter Your Email'
            value={member.email}
            onChange={dataChnage}
        />
        <input
            type='text'
            pass='password'
            placeholder='Please Enter Your Password'
            value={member.pass}
            onChange={dataChnage}
        />
        <button type="submit">Store Password</button>
    </form>
);

export default Form;