import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
const Message = styled.p`
    background-color: #E4E5E6;
    margin-top: 2rem;
    padding: 1rem;
    text-align:center;
`;

const ResulQuotation = styled.div`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #4a4e69;
    background-color: #E4E5E6;
    margin-top: 1rem;
    position: relative;
`;

const TextQuotation = styled.p`
    color: #4a4e69;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ({ quotation }) => {
    return (
        (quotation === 0) ? <Message>Chose brand, year and quotation insurance</Message> :

            (
                <ResulQuotation>
                    <TextQuotation>
                        Total: {quotation}$
                    </TextQuotation>
                </ResulQuotation>
            )
    )
}
Result.protoTypes = {
    quotation: PropTypes.number.isRequired
}
export default Result;