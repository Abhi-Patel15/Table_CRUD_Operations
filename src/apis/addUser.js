import axios from "axios"

const addUserService = async (payload) => {
 const res = await axios.post(`http://localhost:3500/users`, payload);
 console.log(res,'service file res');
 console.log(payload,'service file payload');
 return res;
}



export {
    addUserService,
}