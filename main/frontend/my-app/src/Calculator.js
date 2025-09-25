import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  // Append clicked button value to input
  const appendInput = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear the input
  const clearInput = () => {
    setInput('');
  };

  // Calculate the result using eval (simple but be careful with eval)
  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: 300, margin: '20px auto', padding: 20, border: '1px solid black', borderRadius: 8 }}>
      <h2>Calculator</h2>
      <input
        type="text"
        value={input}
        readOnly
        style={{ width: '100%', height: 40, fontSize: 24, textAlign: 'right', marginBottom: 10, paddingRight: 10 }}
        placeholder="0"
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
        {/* Row 1 */}
        <button onClick={clearInput} style={{ gridColumn: 'span 2' }}>C</button>
        <button onClick={() => appendInput('(')}>(</button>
        <button onClick={() => appendInput(')')}>)</button>

        {/* Row 2 */}
        <button onClick={() => appendInput('7')}>7</button>
        <button onClick={() => appendInput('8')}>8</button>
        <button onClick={() => appendInput('9')}>9</button>
        <button onClick={() => appendInput('/')}>/</button>

        {/* Row 3 */}
        <button onClick={() => appendInput('4')}>4</button>
        <button onClick={() => appendInput('5')}>5</button>
        <button onClick={() => appendInput('6')}>6</button>
        <button onClick={() => appendInput('*')}>*</button>

        {/* Row 4 */}
        <button onClick={() => appendInput('1')}>1</button>
        <button onClick={() => appendInput('2')}>2</button>
        <button onClick={() => appendInput('3')}>3</button>
        <button onClick={() => appendInput('-')}>-</button>

        {/* Row 5 */}
        <button onClick={() => appendInput('0')} style={{ gridColumn: 'span 2' }}>0</button>
        <button onClick={() => appendInput('.')}>.</button>
        <button onClick={() => appendInput('+')}>+</button>

        {/* Row 6 */}
        <button onClick={calculateResult} style={{ gridColumn: 'span 4', backgroundColor: '#4CAF50', color: 'white', fontSize: 20 }}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
