import React, { useState } from 'react';

import { Button, ButtonGroup } from '@mui/material';

import Digit from './modules/Digit'
import Main from './pages/Main';

import './styles/App.css'

const App = () => {
  const [clickedButton, setClickedButton] = useState(true); //どっちのボタンが押されているかを管理する変数 true->タイマー false->カウンター
  const [timerButtonVariant, setTimerButtonVariant] = useState('contained'); //タイマーボタンの見た目の変数
  const [counterButtonVariant, setCounterButtonVariant] = useState('text'); //カウンターボタンの見た目の変数

  const whenTimerButtonClicked = () => {
    setTimerButtonVariant('contained');
    setCounterButtonVariant('text');
    setClickedButton(true);
  }

  const whenCounterButtonClicked = () => {
    setTimerButtonVariant('text');
    setCounterButtonVariant('contained');
    setClickedButton(false);
  }

  return (
    <div className='App'>
      <header className='AppHeader'>
        <div className='Digit'>
          <Digit />
        </div>

        <div className='ButtonGroup'>
          <ButtonGroup sx={{ backgroundColor:'white', height:"48px", margin: "auto 0", boxShadow: "0px 2px 2px 0px gray", border: 'none' }}>
            <Button variant={timerButtonVariant} onClick={whenTimerButtonClicked} sx={{border: 'none'}}>タイマー</Button>
            <Button variant={counterButtonVariant} onClick={whenCounterButtonClicked} sx={{border: 'none'}}>カウンター</Button>
          </ButtonGroup>
        </div>
      </header>
      <Main clickedButton={clickedButton}/>
    </div>
  );
};

export default App;
