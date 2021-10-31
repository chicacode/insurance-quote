import React from 'react';
import styled from '@emotion/styled';
import { firstUpperCase } from '../helper';
import PropTypes from 'prop-types';

const ContainerResume = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #E4E5E6;
    color: #544a7d;
    margin-top: 1rem;
`;

const Resume = ({ data }) => {

    const { brand, year, quote } = data;
    if (brand === '' || year === '' || quote === '') {
        return null;
    }

    return (
        <ContainerResume>
            <h2>Resume Quotation</h2>
            <ul>
                <li>
                    Brand: { firstUpperCase(brand) }
                </li>
                <li>
                    Quote: {firstUpperCase(quote)}
                </li>
                <li>
                    Year: {year}
                </li>
            </ul>
        </ContainerResume>
    )
}
Resume.protoTypes = {
    data: PropTypes.object.isRequired
}
export default Resume;