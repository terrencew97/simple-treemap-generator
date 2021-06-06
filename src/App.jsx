import './App.css';
import TreemapResult from './TreemapResult';
import InputPanel from './InputPanel';
import { useState } from 'react';


function App() {
  const [data, setData] = useState([])
  const [rowNumber, setRowNumber] = useState(0)

  const onDataInputChanged = (text) => {
    try {
      const result = JSON.parse(text)
      setData(result)
    } catch (err) {
      setData([])
    }
  }
  const onRowNumberInputChanged = (rowNumberText) => {
    const result = Number(rowNumberText)
    setRowNumber(isNaN(result) ? 0 : result)
  }

  // const data = [
  //   { name: 'A', weight: 3, value: -0.02 },
  //   { name: 'B', weight: 3, value: 0.05 },
  //   { name: 'C', weight: 6, value: 0.015 },
  //   { name: 'D', weight: 2, value: -0.01 },
  //   { name: 'E', weight: 3, value: 0.01 }
  // ]
  // const rowNumber = 3
  return (
    <div className="App">
      <div className='left-panel'>
        <InputPanel
          onDataInputChanged={onDataInputChanged}
          onRowNumberInputChanged={onRowNumberInputChanged} />
      </div>
      <div className='right-panel'>
        <TreemapResult data={data} rowNumber={rowNumber} />
      </div>
    </div>
  );
}

export default App;
