import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
import { useState } from 'react';

import { getPopularResults, getDiceDataset } from './utils';
import './App.css';

function App() {
  const [diceData, setDiceData] = useState();
  const [number, setNumber] = useState();
  const [hasErrors, setHasErrors] = useState(false);

  const generateButtonClick = (e) => {
    e.preventDefault();
    if (number) {
      setDiceData(getDiceDataset(Number(number)));
      setHasErrors(false);
      return null;
    } 
    setHasErrors(true)
  }
  
  return (
    <div className="App">
      <div className="App-header">
        Please enter the count of dice rolls and watch statistics!
        <form className='input-form'>
          <input type='number' onChange={e => setNumber(e.target.value)} />
          {hasErrors && (<p className='error-message'>Please enter correct number</p>)}
          <button onClick={generateButtonClick}>Generate!</button>
        </form>
        {diceData && (
          <>
            <p>Most popular result: {getPopularResults(diceData)}</p>
            <Bar data={{
              labels: diceData.map(item => item.number),
              datasets: [
                {
                  data: diceData.map(item => item.count),
                  label: "Count of results",
                },
              ],
            }} />
          </>
        )}
        </div>
    </div>
  );
}

export default App;
