
import { Form } from './Form';
import { Clock } from './Clock';
import { Wrapper } from './styled';



function App() {
  return (
    <Wrapper>
      <Clock />
      < Form
      result={result} 
      calculateResult={calculateResult} 
      />
    </Wrapper>
  );
}

export default App;