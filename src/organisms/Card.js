import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'

export default function MyCard(props){
 
    const {capital,region,population,flag} = props;
    return(
        <Card>
            <Card.Img variant="top" src={flag} className="App-logo" />
        <Card.Body>
            <Card.Title>Capital: {capital}</Card.Title>
            <Card.Text>Region: {region}</Card.Text>
            <Card.Text>Población: {population}</Card.Text>
        </Card.Body>
      </Card>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired
}