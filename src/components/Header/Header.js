import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <NavLink exact to='/'>Login</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/add_meme">Add Meme</NavLink>
        </header>
    )
}