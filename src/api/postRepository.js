import axios from 'axios';  

var token = '';

const getLocalToken = () => {  
    token=localStorage.getItem(token);  
};

const postRepository = () => {  
    let baseUrl = 'http://localhost:8000/api/v1/register/user/';
 //CRUD METHODS
 //Create
    const newPost = (post) => {  
        return new Promise( (resolve, reject) => {  
            const instance = axios.create({  
                baseURL : baseUrl,  
    headers: {  
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '+getLocalToken(),
                }  
            });  
     
            instance.post('',post)  
            .then(r => {   
                resolve(r.data);  
            }).catch(e => {  
                console.log(e);  
                reject(e.response);  
            });  
        }); 
    };  



    
    return {  
     newPost,
       
 }  
};  
  
export default postRepository();