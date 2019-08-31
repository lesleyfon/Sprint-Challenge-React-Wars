import React from 'react';
import styled from 'styled-components';

const EachCard = styled.div`
    width: 40%;
    display: flex;
    padding: 0 20px 25px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    background-color: white;
    position: relative;
    margin: 20px 20px;
    box-shadow: 2px 2px 2px lightgrey;

`;
const Li = props =>{
    console.log(props.each)
    return (
        <EachCard>
            <ul>
                <li>Name: {props.each.name}</li>
                <li>Gender:  {props.each.gender}</li>
                <li>Birth Year:  {props.each.birth_year}</li>
                <li>Height:  {props.each.height}</li>

            </ul>
        </EachCard>
    )
};

export default Li