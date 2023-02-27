import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

// wrapper is for css 

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};
// if possible prefer local state
// global state

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target); // which input are we working
  };


  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>

        {/* name input */}
        <FormRow type = "text" 
          name= "name" 
          value = {values.name} 
          handleChange = {handleChange} />

        {/* email */}
        <FormRow type = "email" 
          name= "email" 
          value = {values.email} 
          handleChange = {handleChange} />

        {/* pwd */}
        <FormRow type = "password" 
          name= "password" 
          value = {values.password} 
          handleChange = {handleChange} />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </Wrapper>
  )
}

export default Register
