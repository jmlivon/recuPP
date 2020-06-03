import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { appActions } from '../redux/actions';
import { Msg } from '../components';
import { ListaPaises } from '../templates';
import ListGroup from 'react-bootstrap/ListGroup'

export default function Lista(props){
    const { appReducer } = useSelector(state => state);
    const dispatch = useDispatch();
    const { lista } = appReducer;
    const { region, ruta } = props;

    React.useEffect(() => {
        dispatch(appActions.setLista([]));
        dispatch(appActions.getLista(ruta));
    },[]);

    return (
        
        <div>
            <h1>
                Paises de {region}
            </h1>
            <Msg/>
            <ListGroup variant="flush">
                <ListaPaises paises={lista}/>
            </ListGroup>
        </div>
    )
}