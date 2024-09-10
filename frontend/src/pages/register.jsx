import { useAuthContext } from "@asgardeo/auth-react"
import { useState } from 'react'
import axios from 'axios'

const Register = () => {

    const { signIn } = useAuthContext();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const register = async (e) => {
      e.preventDefault()

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

      if (response.status === 201) {
        signIn()
      }
    }
    
    return (
        <>
        <h2>Sign Up</h2>
        <form onSubmit={ register } style={{ display: "flex", flexDirection: "column", textAlign: 'left'}}>
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
  
          <input style={{ marginTop: "5%"}} type="submit" />
        </form>

        <p>-- or --</p>
      
        <button onClick={ () => signIn({
          fidp: "google"
        }) }>Sign up with Google</button>
      </>
    )

}

export default Register;