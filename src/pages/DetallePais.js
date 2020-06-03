import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {MyCard} from '../organisms';

export default function DetallePais(props){
    const { appReducer } = useSelector(state => state);
    const { pais } = appReducer;

    return (
        <MyCard {...pais}></MyCard>
    )
}