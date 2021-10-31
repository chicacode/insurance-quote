import Header from './components/Header';
import Form from './components/Form';
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
  return (
    <Container>
      <Header title='Insurance Quote' />

      <FormContainer>
      <Form />
      </FormContainer>
    </Container>
  );
}

export default App;
