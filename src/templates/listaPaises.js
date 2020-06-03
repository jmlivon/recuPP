import React from 'react';
import PropTypes from 'prop-types';
import { useSelector,useDispatch } from 'react-redux';
import { appActions } from '../redux/actions';
import { useHistory} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'

export default function ListaPaises(props){
    let history = useHistory();
    
    const { paises } = props;
    const dispatch = useDispatch();

    function handleClick(pais) {
        dispatch(appActions.setPais(pais));
        history.push("detalle");
    }

    return(
        <div>
        {
            paises.length > 0 && paises.map(pais => {
            return <div key={pais.numericCode}>
                <ListGroup.Item>{pais.name + "        " }<input className="btn btn-success" type="button" value="Detalles" onClick={() => handleClick(pais)}/></ListGroup.Item>
                            {/* <Col sm={4}></Col> */}
            </div>
            })
        }
        </div>
    )
}

ListaPaises.propTypes = {
    paises: PropTypes.array.isRequired,
}