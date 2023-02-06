
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom"

const EditUser = () => {

    let navigate = useNavigate();
    const { id } = useParams()

    const [user, setUsers] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });
    const { name, username, email, phone } = user;

    useEffect(() => {
        loadUser();
    }, []);


    const dataChange = (e) => {
        setUsers({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        console.log(e, 'event')
        const res = await axios.put(`http://localhost:3500/users/${id}`, user);
        console.log(res, "idfcdd")
        navigate("/")
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3500/users/${id}`);
        setUsers(result.data);
    }




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

export default EditUser;
