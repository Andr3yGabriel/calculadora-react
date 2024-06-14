import Input from "./Components/input";
import Button from "./Components/buttons";
import { Container, Content, Row} from "./styles";
import { useState } from "react";

const App = () =>  {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(null);

  const handleOnClearAll = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setResult(null);
  };

  const handleOnClear = () => {
    setCurrentNumber('0');
  };

  const handleNumberClick = (number) => {
    if (currentNumber === '0') {
      setCurrentNumber(String(number));
    } else {
      setCurrentNumber(currentNumber + String(number));
    }
  };

  const handleSumNumbers = () => {
    if (operation === '+') {
      const sum = (result !== null ? Number(result) : Number(firstNumber)) + Number(currentNumber);
      setResult(sum);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    } else {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    }
    };
    
    const handleMinusNumbers = () => {
      if (operation === '-') {
        const minus = (result !== null ? Number(result) : Number(firstNumber)) - Number(currentNumber);
        setResult(minus);
        setCurrentNumber(String(minus));
        setFirstNumber('0');
        setOperation('');
      } else {
        setFirstNumber(currentNumber);
        setCurrentNumber('0');
        setOperation('-');
      }
    };
    
    const handleTimesNumbers = () => {
      if (operation === 'x') {
        const times = (result !== null ? Number(result) : Number(firstNumber)) * Number(currentNumber);
        setResult(times);
        setCurrentNumber(String(times));
        setFirstNumber('0');
        setOperation('');
      } else {
        setFirstNumber(currentNumber);
        setCurrentNumber('0');
        setOperation('x');
      }
    };

    const handleDivideNumbers = () => {
      if (operation === '/') {
        const divide = (result !== null ? Number(result) : Number(firstNumber)) / Number(currentNumber);
        setResult(divide);
        setCurrentNumber(String(divide));
        setFirstNumber('0');
        setOperation('');
      } else {
        setFirstNumber(currentNumber);
        setCurrentNumber('0');
        setOperation('/');
      }
    };

    const handlePowerNumbers = () => {
      const power = Number(currentNumber) * Number(currentNumber);
      setCurrentNumber(String(power));
      setFirstNumber(0);
      setOperation('');
    };

    const handleToggleSign = () => {
      if (currentNumber !== '0') {
        setCurrentNumber((prevNumber) => {
          return prevNumber.startsWith('-') ? prevNumber.substring(1) : '-' + prevNumber;
        });
      }
    };

    const handleEquals = () => {
      if (firstNumber !== '0' && operation !== ''){
        switch(operation) {
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case 'x':
            handleTimesNumbers();
            break;
          case '/':
            handleDivideNumbers();
            break;
          case 'x^2':
            handlePowerNumbers();
            break;
          default: break
        }
      }
    };

    return (
      <Container>
        <Content>
          <Input value={currentNumber}/>
          <Row>
            <Button label="C" onClick={handleOnClearAll}/>
            <Button label="CE" onClick={handleOnClear}/>
            <Button label="x^2" onClick={handlePowerNumbers}/>
            <Button label="/" onClick={handleDivideNumbers}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleNumberClick('7')}/>
            <Button label="8" onClick={() => handleNumberClick('8')}/>
            <Button label="9" onClick={() => handleNumberClick('9')}/>
            <Button label="x" onClick={handleTimesNumbers}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleNumberClick('4')}/>
            <Button label="5" onClick={() => handleNumberClick('5')}/>
            <Button label="6" onClick={() => handleNumberClick('6')}/>
            <Button label="-" onClick={handleMinusNumbers}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleNumberClick('1')}/>
            <Button label="2" onClick={() => handleNumberClick('2')}/>
            <Button label="3" onClick={() => handleNumberClick('3')}/>
            <Button label="+" onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button label="+/-" onClick={handleToggleSign}/>
            <Button label="0" onClick={() => handleNumberClick('0')}/>
            <Button label="." onClick={() => handleNumberClick('.')}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
        </Content>
      </Container>
    );
}

export default App;
