import axios from 'axios';  
  
const authRepository = () => {  
 
  
    let baseUrl = 'http://localhost:8000/api/v1/'; 
    
      
  
    const setLocalStorage = value => {
        try{
          localStorage.setItem('tokenLocal', value.token);
          localStorage.setItem('userIdLocal', value.user_id);
            // localStorage.setItem('clave', value.refresh)
            // localStorage.setItem('access', value.access)
        }catch(error){
            console.log(error)
        }
    }
  
   
   
   const logIn = user => {  
       // Retornar una nueva promesa, la promesa es como un try catch  
       // el constructor recibe una funcion (arrow function) 
       // donde recibe resolve y reject  
       return new Promise((resolve, reject) => {  
       // Creamos una instancia de axios, para poder  
       // comunicarnos con el servidor // axios.create recibe un objeto en donde pasamos 
       // baseURL y headers  
           const instance = axios.create({  
               //baseURL es la url del endpoint  
               baseURL: baseUrl,  
               // headers es lo necesario para hacer la petición  
               headers: {  
                   'Content-Type': 'application/json'  
               }  
           });  

           // Ejecutamos un método http, el primer argumento es  
           // la url (si queremos agregar algo más a la url) 
           // el segundo es el objeto con la información 
           // necesaria  
           instance.post('login', user)  
           .then(r => {  
               // si es correcto  
               // guardamos el resultado (el token de Django) 
               // en la base de datos (Local Storage) 
               // El primer argumento es el nombre con el que se va a guardar 
               // El segundo es la información que se guardara 
               // Siempre debe hacer una llamada a JSON.stringify  
               console.log(r.data)
               
               setLocalStorage(r.data);
               
              
               // si es correcto, mediante resolve, retornamos la Promise  
            resolve(r.data);  
               
           }).catch(e => {  
              console.log(e); 
               //console.log(e.response.data.password[0]);
               //console.log(e.response.data.username[0]);
               
               // Si algo salio mal, mediante reject, retornamos la promise  
               reject(e.response);  
           }); 
       }); 
   };  

   let reg = 'http://localhost:8000/api/v1/register/user/';
 //CRUD METHODS
 //Create
    const newPost = (post) => {  
        return new Promise( (resolve, reject) => {  
            const instance = axios.create({  
                baseURL : reg,  
    headers: {  
                    'Content-Type': 'application/json',
                    
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

    let prof = 'http://localhost:8000/api/v1/profile/Profile/';
 //CRUD METHODS
 //Create
    const newProfile = (post) => {  
        return new Promise( (resolve, reject) => {  
            const instance = axios.create({  
                baseURL : prof,  
    headers: {  
                'Content-Type': 'application/json',
                 
                    
                }  
            });  
            instance.post('', {
                name: post.name,
                url:post.url,
                id_user:post.id_user,
              })  
            .then(r => {   
                resolve(r.data);  
            }).catch(e => {  
                console.log(e);  
                reject(e.response);  
            });  
        }); 
    };
   
   
   
   return {  
       logIn,
       newPost,
       newProfile
       
   }  
};  
 
export default authRepository();