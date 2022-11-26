import axios from 'axios';

const URL = 'http://localhost:5000';

export const getalldata=async ()=>{
    try{
       return await axios.get(`${URL}/compare/data`);
    }catch(error){
        console.log('Eror while calling getUsers API',error)
    }
    
}

