import React ,{Component} from 'react'
import './App.css';
import { Switch, Route ,Link} from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Products from './Components/Pages/Products'
import Contact from './Components/Pages/Contact'
import SignUp from './Components/Pages/signUp'

class App extends Component {
  render() {
  return (
   
   
    <div>
    <nav className="navbar">
      <ul>
        <li>
          <Link to={'/'} className="nav-link">Home</Link>
        </li>
        <li>
          <Link to={"/Products"} className="nav-link">Products</Link>
        </li>
        <li>
          <Link to={'/Contact'} className="nav-link">Contact Us</Link>
        </li>
        <li>
          <Link to={'/About'} className="nav-link">About Us</Link>
        </li>
        <li>
          <Link to={'/signUp'} className="nav-link">Sign Up</Link>
        </li>
      </ul>
    </nav>
    <hr />
   <Switch>
      <Route path='/' exact component={Home}/>
      <Route path="/Products" exact component={Products}/>
      <Route path='/About' exact component={About}/>
      <Route path='/Contact' exact component={Contact}/>
      <Route path='/signUp' exact component={SignUp}/>
    </Switch> 
    </div>
   
  );
}}

export default App;
