import { useState } from 'react'
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { addUser } from '../Services/Api'
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`

const defaultValue = {
  name: '',
  username: '',
  email: '',
  phone: ''
}

const AddUser = () => {
  const [user, setUser] = useState(defaultValue);
  const navigete = useNavigate();

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value }); // ...USER is a spread operater is spread the data
    console.log(user); // Log the updated user state
  }
  const addUserDetailes = async () => {
    await addUser(user);
    navigete('/all');
  }


  return (
    <>
      <Container>

        <Typography variant='h4'>Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='name'/>
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='Username' />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='email' />
        </FormControl>
        <FormControl>
          <InputLabel>phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='phone' />
        </FormControl>
        <FormControl>
          <Button variant='contained' onClick={() => addUserDetailes()}>Add Users</Button>
        </FormControl>

      </Container>
    </>
  )
}

export default AddUser