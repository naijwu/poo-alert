import './App.css';
import { Switch, Route } from 'react-router-dom';

import Main from './Main';

function App() {

  return (
    <Switch>
      <Route exact path="/" component={Main}></Route>
    </Switch>
  );
}

export default App;
