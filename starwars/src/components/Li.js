import React from 'react';
import styled from 'styled-components';

// styled Components
const EachCard = styled.div`
    width: 40%;
    display: flex;
    padding: 20px 25px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    background-color: white;
    position: relative;
    margin: 20px 20px;
    box-shadow: 2px 2px 2px lightgrey;
    
    .ulStyles{
        margin: 0 auto;
    }
    .liStyles{
        list-style-type: none;
    }
`;

const Li = props =>{
    return (
        <EachCard>
            <ul className='ulStyles'>
                <li className='liStyles'>Name: {props.each.name}</li>
                <li className='liStyles'>Gender:  {props.each.gender}</li>
                <li className='liStyles'>Birth Year:  {props.each.birth_year}</li>
                <li className='liStyles'>Height:  {props.each.height}</li>
                <li className='liStyles'>Weight:  {props.each.mass}lb</li>

            </ul>
        </EachCard>
    )
};

export default Li