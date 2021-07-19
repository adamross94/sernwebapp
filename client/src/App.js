import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from "./pages/Home";
import CreateAEMonthlySitRep from './pages/CreateAEMonthlySitRep';

function App() {
  return (
    <div className="App">
     
       <Router>
         <Link to="/createaemonthlysitrep" > Input A&E Monthly SitRep Data</Link>
         <Link to ="/">Home Page</Link>
           <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/createaemonthlysitrep" exact component={CreateAEMonthlySitRep} />
           </Switch>
        </Router>
       </div>
  );
}

export default App;