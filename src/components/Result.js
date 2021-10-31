import React from 'react';
import styled from '@emotion/styled';

const Message = styled.p`
    background-color: rgb(980, 234, 217);
    margin-top: 2rem;
    padding: 1rem;
    text-align:center;
`;

const Result = ({quotation}) =>{
   return(
       (quotation === 0) ? <Message>Chose brand, year and quotation insurance</Message> :
       
       <p>
           Total: { quotation }$
       </p>
      
   )
}

export default Result;