import { useState } from 'react'

const Register = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const register = () => {

    }
    

    return (
        <>
        <form onSubmit={ register } style={{ display: "flex", flexDirection: "column"}}>
          <label>First name</label>
          <input type="text" name="firstName" />
  
          <label>Last name</label>
          <input type="text" name="lastName" />
  
          <label>Email</label>
          <input type="email" name="email" />
  
          <label>Password</label>
          <input type="password" name="password" />
  
          <label>Confirm password</label>
          <input type="password" name="confirm-password" />
  
          <input type="submit" />
        </form>
      </>
    )

}

export default Register;