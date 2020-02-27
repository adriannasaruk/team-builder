import React, {useState} from "react"


const Form = props => {

    const [team, setTeam] = useState ({
        name: " ",
        email: " ",
        role: " "
    })

    const handleChanges = e => {
        setTeam ({...team, [e.target.name]: e.target.value});
    }

    const submitForm = e => {
        e.preventDefault()
        props.addNewTeam(team)
        console.log(team)
        setTeam({
        name: " ",
        email: " ",
        role: " " })

    }


    return (
        <form onSubmit = {submitForm}>
            <label htmlFor = "name">Name:</label>
            <input name = "name" type = "text" onChange = {handleChanges} />
            <label htmlFor = "email">Email:</label>
            <input name = "email" type = "text" onChange = {handleChanges} />
            <label htmlFor = "role">Role:</label>
            <input name = "role" type = "text" onChange = {handleChanges} />
            <button type = "submit">Submit</button>
        </form>
    );
};  
export default Form