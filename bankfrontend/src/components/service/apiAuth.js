 import axios from 'axios';
 
 axios.defaults.baseURL = 'http://localhost:8080';

//Send contact

//===================================================================//


//Login varification

// export const loginWithBasicAuth = async (username, password) => {
//     const credentials = `${username}:${password}`;
//     const base64Credentials = btoa(credentials);
//     const headers = { Authorization: `Basic ${base64Credentials}` };
  
//     try {
//       // Send the API request with Basic Authentication headers
//       const response = await axios.get('/user', { headers });
//       return response.data
//       // If the request is successful, the user is authenticated
//     } catch (error) {
//       return error.response.data ;
//     }
//   };



export const signIn =async(data)=>{
  try{
         return await axios.post(`/api/auth/signin`,data);
         
 }catch(error){
  console.error("Error while processing request:", error);
        throw error; ;
 }
}

export const register =async(data)=>{

  try{
         return await axios.post(`/api/auth/signup`,data);
         
 }catch(error){
  console.error("Error while processing request:", error);
        throw error; ;
 }
}

