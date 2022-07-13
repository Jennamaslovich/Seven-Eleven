import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

function App() {
Const [values, setValues] = useState({
    firstName:"",
    lastName:"",
    email:"",
})

const handleFirstNameInputChange = (event) =>{
    setValues({...values, firstName: event.target.value})
}

return (

    <div className="Form-container">
        <form className="register-form">
            <input
            
            value={values.firstName}
            className="form-field"
            placeholder="First name"
            name="firstName" />
            <input
             value={values.lastName}
             className="form-field"
             placeholder="last Name"
             name="lastname" />

            <input
             value={values.firstName}
             className="form-field"
             placeholder="Email"
             name="email" />

        </form>
    </div>
)
}