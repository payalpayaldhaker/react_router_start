import React from 'react'
import Contact from './Contact'
import Home from './Home'

/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; */


export default function App() {
  //state/variable

  //function

  //return statement
  return (
    <>
      {/* 
     
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Contact">About</Link>
            </li>
           
          </ul>
        </nav>

       
        <Switch>
        <Route path="/">
            <Home />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
         
          
        </Switch>
      </div>
    </Router> */}
     <Home/>
     <br/>
     <br/>
     <br/>
     <Contact/>
    </>
  )
}
