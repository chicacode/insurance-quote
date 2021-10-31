import React, { useState } from 'react'
import styled from '@emotion/styled';

import { getDifferenceYear, calculateBrand, getQuote } from '../helper';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`;

const Input = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #4a4e69;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #928DAB;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: #b92b27;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;


const Form = ({setResume})=>{
    const [data, setData] = useState({
        brand: '',
        year: '',
        quote: ''
    });

    const [error, saveError]= useState(false);

    const {brand, year, quote } = data;

    const getData = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const getInsurance = e =>{
        e.preventDefault();

        if(brand.trim() === '' || year.trim() === '' || quote.trim() ===''){
            saveError(true);
            return;
        }
        saveError(false);

        let result = 2000;
        const difference = getDifferenceYear(year);

        // console.log('La diferencia es: ', difference);

        // each year substract 3%
        result -= ((difference * 3 ) * result) /100;

        // console.log('difference year 3%',result);
    
        result = calculateBrand(brand) * result;

        console.log('calculate brand',result);

        //compute the brand if is european is more expensive

        const incrementQuote = getQuote(quote);

        // console.log('incremente plan', incrementQuote)

        result = parseFloat(incrementQuote * result ).toFixed(2);

        setResume({
            quotation: result,
            data
        })
    }
    return(
        <form onSubmit={getInsurance}>

            {error ? <Error>All fields are required</Error> : null}
            <Field>
                <Label>
                    Car Brand
                </Label>
                <Select name='brand' value={brand} onChange={getData}>
                    <option value="">--Select--</option>
                    <option value="american">American</option>
                  
                    <option value="asian">Asian</option>
                    <option value="european">European</option>
                </Select>
            </Field>

            <Field>
                <Label>
                    Car Year
                </Label>
                <Select name='year' value={year} onChange={getData}>
                    <option value="">--Select--</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>

            <Field>
                <Label>
                Quote
                </Label>

                <Input
                    type="radio"
                    name="quote"
                    value="basic"
                    checked={quote === 'basic'}
                    onChange={getData}
                />Basic
                <Input
                    type="radio"
                    name="quote"
                    value="premium"
                    checked={quote === 'premium'}
                    onChange={getData}
                />Premium
            </Field>

            <Button type="submit">Start a Quote</Button>
        </form>
    )
}

export default Form;