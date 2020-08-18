import React, { useState, useEffect } from "react";

function teamMemberForm(props) {
    const emptyTM = {
        name: '',
        email: '',
        pass: '',
    };
    const [member, setMember] = useState(emptyTM);
    const dataChnage = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
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
            )}
        }
    }

export default Form;