
import axios from 'axios';
import React,{ useState} from 'react';
//import{ useNavigate } from "react-router-dom"
import{ Link, useHistory, useNavigate } from "react-router-dom"
import { addUserService } from './apis/addUser';

const Adduser = () => {

    let navigate = useNavigate();
 

    const [user, setUsers] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });
    const { name, username, email, phone } = user;

  

    const dataChange = (e) => {
        setUsers({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
    
         await axios.post("http://localhost:3500/users/", user);
        
        navigate.push("/")
    }



//  let navigate = useNavigate();
// // let history = useHistory ();
//     const [user, setUsers] = useState({
//         name:"",
//         username:"",
//         email: "",
//         phone:""
// });

  
// const{name, username, email, phone}= user;

//     // const dataChange = (e) =>{
//     //     console.log(e,"e");
//     //     setUsers(e.target.value);
//         // const value = e.target.value;
//         // setUsers({
//         // //   ...user,
//         // //   [e.target.name]: e.target.value
//         // });
//     //   }

// const handleSubmit = async (e) =>{
    
//     addUserService(user)

//     // setUsers(user);
//     // // history.push("/"); 
//     // navigate("/")
// }

// // const handleSubmit = () => {
// //     axios.post("http://localhost:3500/users",user)
// //     setUsers(user);
// //     console.log(user);
    
// //     };
   
  return (
    <div className="container">
            <div className="w-75 mx -auto mb-4">
                <h2 className="text-center mb-4">Add a user</h2>
                <Link className="btn btn-primary" to="/">back to home</Link>
                <form  className="d-flex justify-content-center flex-column align-items-center">
                    <div className="from-group mt-1">
                        <input
                            type="text"
                            className="from-form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => dataChange(e)} />
                    </div>
                    <div className="from-group mt-1">
                        <input
                            type="text"
                            className="from-form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="username"
                            value={username}
                            onChange={e => dataChange(e)} />
                    </div>
                    <div className="from-group mt-1">
                        <input
                            type="text"
                            className="from-form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="email"
                            value={email}
                            onChange={e => dataChange(e)} />
                    </div>
                    <div className="from-group mt-1">
                        <input
                            type="text"
                            className="from-form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={phone}
                            onChange={e => dataChange(e)} />
                    </div>
                    <button type="button" onClick={(e)=>handleSubmit(e)} className="btn btn-primary btn block mt-1">Update data</button>
                </form>
            </div>

        </div>
  );
}

export default Adduser;
