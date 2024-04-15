import React from 'react'
import { useEffect , useState} from 'react'
import { TableBody, TableHead, TableRow, TableCell, Box, Table, Button} from '@mui/material'
import { getUsers ,deleteUser} from '../Services/Api'
//navigation link add cheythu click cheyyumpo edit akan vendi.
import { Link } from 'react-router-dom'



const AllUser = () => {
  
   

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);
  
  const getAllUsers = async() => {
    let responce = await getUsers();
    setUsers(responce.data);
  }
  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }
  return (
    <Table sx={{width:"90%", margin:"50px auto 0 auto"}}>
      <TableHead>
        <TableRow sx={{backgroundColor:"#000000"}}>
          <TableCell sx={{color:"#fff",fontSize:"20px"}}>Id</TableCell>
          <TableCell sx={{color:"#fff", fontSize:"20px"}}>Name</TableCell>
          <TableCell sx={{color:"#fff",fontSize:"20px"}}>UserName</TableCell>
          <TableCell sx={{color:"#fff",fontSize:"20px"}}>Email</TableCell>
          <TableCell sx={{color:"#fff",fontSize:"20px"}}>Phone</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody >
        {
          users.map(User =>(
            <TableRow key={User.id}>
              <TableCell sx={{fontSize:"16px"}}>{User._id}</TableCell>
              <TableCell sx={{fontSize:"16px"}}>{User.name}</TableCell>
              <TableCell sx={{fontSize:"16px"}}>{User.Username}</TableCell>
              <TableCell sx={{fontSize:"16px"}}>{User.email}</TableCell>
              <TableCell sx={{fontSize:"16px"}}>{User.phone}</TableCell>
              <TableCell>
                <Button variant='contained' sx={{marginRight:"10px"}} component={Link} to={`/edit/${User._id}`}>Edit</Button> 
                <Button variant='contained' color='secondary' onClick={()=> deleteUserDetails(User._id)}>Delete</Button>
              </TableCell>

            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}

export default AllUser