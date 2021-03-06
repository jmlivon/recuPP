import React from 'react';
import {NavBar} from './';
import {NavLink} from '../atoms';

export default function Menu(props){
    return (
        <NavBar> 
            <NavLink href="america" label="America"/>
            <NavLink href="europa" label="Europa"/>
            <NavLink href="africa" label="Africa"/>
        </NavBar>
    )
}