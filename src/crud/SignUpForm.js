import React from 'react';

export const SignUpForm = ({onChange,onSubmit, user:{first_name,last_name,username,email,password,password2}}) => (
    <form className="form" onSubmit={onSubmit}>
        <h1>Registro de Usuario</h1>

        <label htmlFor="first_name">Nombre</label>
        <input 
            type="text"
            id="first_name" 
            name="first_name" 
            value={first_name}
            onChange={onChange}
        />
        <label htmlFor="last_name">Apellido</label>
        <input 
            type="text"
            id="last_name" 
            name="last_name" 
            value={last_name}
            onChange={onChange}
        />
        <label htmlFor="username">UserName</label>
        <input 
            type="text"
            id="username" 
            name="username" 
            value={username}
            onChange={onChange}
        />
        <label htmlFor="email">Email</label>
        <input 
            type="text"
            id="email" 
            name="email" 
            value={email}
            onChange={onChange}
        />
        <label htmlFor="password">Contraseña</label>
        <input 
            type="password" 
            name="password" 
            id="password" 
            value={password}
            onChange={onChange}
        />
        <label htmlFor="password2">Repetir Contraseña</label>
        <input 
            type="password" 
            name="password2" 
            id="password2" 
            value={password2}
            onChange={onChange}
        />
        
        <input 
            type="submit"  
            value="Registrar"
        />
    </form>
);