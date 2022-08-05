import './App.css'; 
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';

function App() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:3001/'

    axios.get(url)
    .then(res => setResult(res.data))
    .catch(err => console.log(err))

  }, [])


  return (
    <div >
      <div className='card-cont'>
        {
          result.map((data, index) => <Card key={index} data={data} />)
        }
      </div>
    </div>
  );
}

export default App;
