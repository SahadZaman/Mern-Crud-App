import { useState , useEffect} from 'react'
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from '@mui/material'
import { styled } from '@mui/material'
import React from 'react'
import { editUser, getUser } from '../Services/Api'
import { useNavigate , useParams} from 'react-router-dom';

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

const EditUser = () => {
  const [user, setUser] = useState(defaultValue);
  const navigete = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    loadUserDetails();
  }, [])
//ippo useEffect hook upayokich api call cheyyukayan
  const loadUserDetails = async() => {
    const response = await getUser(id);
    setUser(response.data);
  };
  

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value }); // ...USER is a spread operater is spread the data
    console.log(user); // Log the updated user state
  }
  const editUserDetailes = async () => {
    await editUser(user, id);
    navigete('/all');
  }


  return (
    <>
      <Container>

        <Typography variant='h4'>Edit User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='name'value={user.name} />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='Username' value={user.Username}/>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='email' value={user.email}/>
        </FormControl>
        <FormControl>
          <InputLabel>phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone} />
        </FormControl>
        <FormControl>
          <Button variant='contained' onClick={() => editUserDetailes()}>Edit User</Button>
        </FormControl>

      </Container>
    </>
  )
}

export default EditUser