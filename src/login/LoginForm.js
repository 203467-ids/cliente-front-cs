import React from 'react';

export const LoginForm = ({onChange,onSubmit,onClick, user:{username,password}}) => (
    <form className="form" onSubmit={onSubmit}>
        <h1>LOGIN</h1>
        <label htmlFor="username">Usuario</label>
        <input
            type="text"
            id="username"
            name="username"
            value={username}
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
        <input
            type="submit"
            value="Iniciar Sesión"
        />
        <input
            type="button"
            name="registrar"
            id="registrar"
            value="Registrate"
            onClick={onClick}
                    />
    </form>
);