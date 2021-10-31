import React from 'react';
import styled from '@emotion/styled';
import { firstUpperCase } from '../helper';


const ContainerResume = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #f4791f;
    color: #fff;
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
                    Quote: {quote}
                </li>
                <li>
                    Year: {year}
                </li>
            </ul>
        </ContainerResume>
    )

}

export default Resume;