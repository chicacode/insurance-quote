import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff4f1;
  padding: 3rem;
`;

function App() {
  const [resume, setResume ]= useState({
    quotation: 0,
    data:{
      brand: '',
      year: '',
      quote: ''
    }
  });

const { data } = resume;
  return (
    <Container>
      <Header title='Insurance Quote' />

      <FormContainer>
        <Form setResume={setResume}/>
        <Resume data={data}/>
      </FormContainer>
    </Container>
  );
}

export default App;
