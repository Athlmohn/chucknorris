import axios from "axios";

export const API_URL = 'https://api.chucknorris.io/jokes/categories';

export const getCategory = async () =>{

    try{
       const response = await axios.get(`${API_URL}`)
      return response.data;
    }
    catch(error){
      return[];
    }
 }

//  export const getRandomJoke = async ()=>{
//     try{
//         const response = await axios.get(`${API_URL}`)
//     }catch(err){

//     }
//  }
