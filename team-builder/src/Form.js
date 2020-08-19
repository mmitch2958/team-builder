import React, { useState, useEffect } from "react";

function teamMemberForm(props) {
    const emptyTM = {
        name: '',
        email: '',
        pass: '',
    };
    const [member, setMember] = useState(emptyTM);

    const dataChnage = e => {
        console.log('what is target.value', e);
        setMember({ ...member, [e.target.name]: e.target.value });

    };


    const submitForm = (e) => {
        e.preventDefault();
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
            placeholder='Name'
            value={member.name}
            onChange={dataChnage}
        />
        <input
            type='text'
            name='email'
            placeholder='Website'
            value={member.email}
            onChange={dataChnage}
        />
        <input
            type='text'
            name='pass'
            placeholder='Please Enter Your Password'
            value={member.pass}
            onChange={dataChnage}
        />
        <button type="submit">Store Password</button>
    </form>
);

export default Form;