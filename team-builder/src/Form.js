import React, { useState, useEffect } from "react";




 const TeamMemberForm = (props) => {

    const emptyTM = {
        id: '',
        name: '',
        email: '',
        pass: '',
     };
     
    const [member, setMember] = useState(emptyTM);

    function dataChange(e) {
        console.log('what is target.value', e);
        setMember({ ...member, [e.target.name]: e.target.value });
    
      };
    

    const submitForm = (e) => {
        e.preventDefault();
        const newMem = {
            ...member,
            id: Date.now()
    // if (props.isEditing == false) {
        
    //     };
        // setNewValue(newMem);
        // setMember(emptyTM);
        
        // } else {
        //     props.member.map(currentValue => {
        //         if (currentValue.id === member.id) {
        //             currentValue.name = member.name;
        //             currentValue.email = member.email;
        //             currentValue.pass = member.pass;
        //             // props.setNewMember(member);
        //             setMember(emptyTM);
        //         }

            // }
            // );
        }
        }

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
);};

export default TeamMemberForm;