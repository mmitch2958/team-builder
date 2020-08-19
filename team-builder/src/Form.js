import React, { useState, useEffect } from "react";




const TeamMemberForm = (props) => {

    const emptyTM = {
        id: Date.now,
        name: '',
        email: '',
        pass: '',
    };
     
    const [member, setMember] = useState(emptyTM);

    function dataChange(e) {
        console.log('what is target.value', e);
        setMember({ ...member, [e.target.name]: e.target.value });
    
    };
     
    

    const submitForm = e => {
        e.preventDefault();
        console.log('Form Submitted')
       
        props.setNewValue(member)
        setMember({ name: "", email: "", pass: "" })
    }

    return (
        <form onSubmit={submitForm}>
            <input
                type='text'
                name='name'
                placeholder='Name'
                value={member.name}
                onChange={dataChange}
            />
            <input
                type='text'
                name='email'
                placeholder='Website'
                value={member.email}
                onChange={dataChange}
            />
            <input
                type='text'
                name='pass'
                placeholder='Please Enter Your Password'
                value={member.pass}
                onChange={dataChange}
            />
            <button type="submit">Store Password</button>
        </form>
    )
};

export default TeamMemberForm;