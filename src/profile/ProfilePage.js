import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../profile/profile.css';
const baseUrl='http://localhost:8000/api/v1/profile/user/'+localStorage.getItem('userIdLocal')



function App() {

  let urlImgProfile = "";
  let username,first_name,last_name,email,fileImg, fileDefault;
  let usuario,nombre, apellido, correo;
  
  const setVar = (value) => {
	nombre = value.first_name;
	apellido = value.last_name;
	usuario = value.username;
	correo = value.email;
}
  const peticionGet=async()=>{
    await axios.get("http://localhost:8000/api/v1/profile/user/"+localStorage.getItem('userIdLocal'),{
		headers : { 
			'Authorization': 'Token ' +localStorage.getItem('tokenLocal'),
		},
	})
	.then((response) =>{
		console.log(response.data);
		setVar(response.data);

		if(response.data.url_img === null){
			urlImgProfile = "http://127.0.0.1:8000/assets/img-profile/default.png"
		}else{
			urlImgProfile = "http://127.0.0.1:8000" + response.data.url_img;
		}

		document.getElementById('preview').src = urlImgProfile;
		document.getElementById('name').placeholder = response.data.first_name;
		document.getElementById('lastname').placeholder = response.data.last_name;
		document.getElementById('username').placeholder = response.data.username;
		document.getElementById('email').placeholder = response.data.email;
	})
	.catch((error) =>{
		console.log("get error: ");
		console.log(error.response.data);
		document.getElementById('preview').src = "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
	})
  }

  const peticionPost = () => {
	let postData = new FormData();
	
	first_name = document.getElementById("name").value 
	last_name = document.getElementById("lastname").value 
	username = document.getElementById("username").value 
	email = document.getElementById("email").value 
	fileImg = document.getElementById('img').files[0];
	
	postData.append('id_user', localStorage.getItem('userIdLocal'));
	
	if(username === ""){
		username = usuario; //si no se edita, se mantiene sin modificaciones
	}
	if(first_name === ""){
		first_name = nombre;
	}
	if(last_name === ""){
		last_name = apellido;
	}
	if(email === ""){
		email = correo;
	}
	
	if(fileImg === undefined){
		console.log("No actualizar foto")
	}else{
		postData.append('url_img', fileImg); 
	}
	
	postData.append('first_name',first_name);
	postData.append('last_name',last_name);
	postData.append('username',username);
	postData.append('email',email);
	axios
		.post("http://localhost:8000/api/v1/profile/user/", postData, {
			headers: { 
				'Content-Type': 'multipart/form-data',
				'Authorization': 'Token ' +localStorage.getItem('tokenLocal'),
			},
		})
		.then((response) =>{
			console.log(response.data);
			if(response.data.url_img === null){
				urlImgProfile = "http://127.0.0.1:8000/assets/img-profile/default.jpg"
			}else{
				urlImgProfile = "http://127.0.0.1:8000" + response.data.url_img;
			}
			
			console.log(urlImgProfile);
			document.getElementById('preview').src = urlImgProfile;
			alert('Imagen de perfil guardada!!!');
    
		})
		.catch((error)=>{
			console.log("post error ");
			console.log(error.response.data);
			if(error.response.data.id_user != null){ //significa que quiere actualizar
				console.log("hacer el put");
				peticionPut();
				
		
			}
	})
	}

	const peticionPut = () =>{
        console.log("user " + username);
        console.log("userRes " + usuario);
        let putData = new FormData();

        if(fileImg === undefined){
            fileImg = ""
        }

        putData.append('url_img', fileImg);
        putData.append('first_name',first_name);
        putData.append('last_name',last_name);
        putData.append('username',username);
        putData.append('email',email);

        axios
            .put("http://localhost:8000/api/v1/profile/user/"+localStorage.getItem('userIdLocal'),putData,{
                headers : {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Token ' +localStorage.getItem('tokenLocal'),
                },
            })
            .then((response) =>{
                console.log(response.data);
                setVar(response.data);
                if(response.data.url_img === null){
                    urlImgProfile = "http://127.0.0.1:8000/assets/img-profile/default.jpg"
                }else{
                    urlImgProfile = "http://127.0.0.1:8000" + response.data.url_img;
                }
                document.getElementById('preview').src = urlImgProfile;
                window.location.reload();
                document.getElementById('img').value = ""; //resetea el input file
				alert('Informacion Actualizada');
            })
            .catch((error)=>{
                console.log("put error: " );
                console.log(error);
				alert('no se pudo actualizar!!!');
		
            })
    }

 
 

  useEffect(async()=>{
    await peticionGet();
  },[])



  return (
    <div className="container">
      <div>
                
				<form className="form" >
                <center><h1 id="userTitle">PROFILE</h1></center>
                <div >
				<center>
                    <img class="imgRedonda" alt="error img" id="preview"/></center>
                    </div>
					<input accept="image/*" type="file" id="img" class="custom-input-file"></input>
					
                <div >
                    <div >
                        <p><b>First name: </b><input type="text" id="name"></input></p>
                    </div>
                    <div >
                        <p><b>Last name: </b></p><input type="text" id="lastname"></input>
                    </div>
                    <div >
                        <p><b>Username: </b></p><input type="text" id="username"></input>
                    </div>
                    <div >
                        <p><b>E-mail: </b></p><input type="text" id="email"></input>
                    </div>
                </div>
				<input
           		 type="button"
            	name="registrar"
           		id="registrar"
            	value="Guardar"
            	onClick={peticionPost}
                    />
        
                </form>
                
               
            </div>
        
    </div>
  );
}

export default App;