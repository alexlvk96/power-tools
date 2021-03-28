import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const DrillsPage = () => (
  <div>
    <h1>DRILLS</h1>
  </div>
);

function App() { 
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/drills' component={DrillsPage} />
      </Switch>
    </div>
  );
}

export default App;
