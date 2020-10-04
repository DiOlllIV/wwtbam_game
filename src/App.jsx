import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Start from './components/Start';
import Game from './components/Game';
import './styles/index.scss'
import GameOver from "./components/GameOver";

const App = () => { 
  const [ actulaSum, setActualSum ] = useState(0);
  const [ passed, setPassed ] = useState([]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path='/game'>
          <Game setActualSum={setActualSum} 
            passed={passed} 
            setPassed={setPassed} 
          />
        </Route>
        <Route path='/game-over'>
          <GameOver totalScore={actulaSum} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;