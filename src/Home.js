import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
  const[user,setUsers] = useState([]);

  useEffect(() =>{
    loadUser();
  },[]);

  const loadUser = async () =>{
    const result = await axios.get("http://localhost:3500/users");
    setUsers(result.data);
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3500/users/${id}`);
    loadUser();
  }
  return (
    <div className='container'>
    <h1>Home</h1>
    <table className="table">
  <thead className="bg-black text-white">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
     {user.map((user,index)=>(
      <tr>
        <th scope='row '>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <Link className='btn btn-primary' to={`/user/${user.id}`}>view</Link>
          <Link className='btn btn-outline-priimary' to={`/edit/${user.id}`}>Edite</Link>
          <Link className='btn btn-danger' onClick={()=>{deleteUser(user.id)}}>Delete</Link>
        </td>
      </tr>
     ))}
  </tbody>
</table>
  </div>
  );

}

export default Home;
