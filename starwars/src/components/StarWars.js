import React from 'react';
import styled from 'styled-components';
import Li from './Li';

const StarWarsDiv = styled.div`
    width: 980px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

`;

const StarWars = props =>{
    return (
        <StarWarsDiv>
            {props.allStarWars.map((each, i) =>{
            return <Li each = { each } key = {i}></Li>;
            })}
        </StarWarsDiv>
    )
}

export default StarWars