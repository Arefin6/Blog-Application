import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="*">
           <h2 className="text-center text-danger ">404!Sorry Not Found</h2>
        </Route>
      </Switch>
    </Router>
     <Footer></Footer>
   </>
  );
}

export default App;
