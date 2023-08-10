import { useState } from 'react';

import Card from '../Card/Card';
import Success from '../Success/Success';

import '../../GlobalStyles/Reset.scss';
import '../../GlobalStyles/Settings.scss';
import './App.scss';

const App = () => {
  const [isSuccess, setIsSuccess] = useState(false)

  return (
    <div>
      {isSuccess ? <Success setIsSuccess={setIsSuccess} /> : <Card setIsSuccess={setIsSuccess} />}
    </div>
  );
}

export default App;
