import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';
import Result from './components/Result';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 100px;
`;

const FormContainer = styled.div`
background-color: #fdfcece3;
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

  const [ loading, setLoading ] = useState(false);

const { data, quotation } = resume;
  return (
    <Container>
      <Header title='Insurance Quote' />

      <FormContainer>
        <Form setResume={setResume} setLoading={setLoading}/>

        { loading && <Spinner /> }
       
        <Resume data={data}/>
        <Result quotation={quotation}/>
      </FormContainer>
    </Container>
  );
}

export default App;
