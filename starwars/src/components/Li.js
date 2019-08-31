import React from 'react';
import styled from 'styled-components';

const EachCard = styled.div`
    width: 45%;
    display: flex;
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