import './App.css';
import {Counters, Header} from './components/counters/Counter';
import MyShop from './components/shop/Shop';
import MyHome from './components/home/Home';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import ShopDetails from './components/shop/ProductDetails';
import reactDom from 'react-dom';
import MyNav from './components/Navbar/NavBar';
// import Header from './components/counters/Header'



function App() {
  return (
    <div className="App">
     
    
   
      <Router>
      <MyNav/> 
      <Switch>
      <Route component = {MyHome} path = "/" exact/>
     <Route component = {MyShop} path = "/shop" exact/>
     <Route component = {ShopDetails} path = "/shop/:id"/>
    
     <Route component = {Counters} path = "/count"/>

     </Switch>
   
        </Router>
    
    
    
    </div>
  );
}

export default App;