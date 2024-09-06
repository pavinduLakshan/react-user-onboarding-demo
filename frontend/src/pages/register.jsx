import { useState } from 'react'
import axios from 'axios'

const Register = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const register = async (e) => {
      e.preventDefault()
      console.log(formData)

      const response = await axios({
        method: 'post',
        data: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password
        },
        url: 'http://localhost:3000/register'
      })

      console.log(response)

    }
    

    return (
        <>
        <form onSubmit={ register } style={{ display: "flex", flexDirection: "column"}}>
          <label>First name</label>
          <input type="text" name="firstName" onChange={(e) => {
            setFormData({
              ...formData,
              firstName: e.target.value
            })
          }}/>
  
          <label>Last name</label>
          <input type="text" name="lastName" onChange={(e) => {
            setFormData({
              ...formData,
              lastName: e.target.value
            })
          }}/>
  
          <label>Email</label>
          <input type="email" name="email" onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value
            })
          }}/>
  
          <label>Password</label>
          <input type="password" name="password" onChange={(e) => {
            setFormData({
              ...formData,
              password: e.target.value
            })
          }}/>
  
          <label>Confirm password</label>
          <input type="password" name="confirm-password" 
          onChange={(e) => {
            setFormData({
              ...formData,
              confirmPassword: e.target.value
            })
          }}
          />
  
          <input type="submit" />
        </form>
      </>
    )

}

export default Register;