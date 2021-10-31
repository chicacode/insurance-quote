import React from 'react'
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
    background-color: #4a4e69;
    padding: 10px;
    font-weight: bold;
    color:#fff;
    text-align: center;
`;
const TextHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
`;
const Header = ({title}) =>{
    return(
        <HeaderContainer>
                    <TextHeader>{title}</TextHeader>
        </HeaderContainer>
    )
}

export default Header;