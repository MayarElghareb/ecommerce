import './App.css';
import {Counters, Header} from './components/counters/Counter';
// import Header from './components/counters/Header'



function App() {
  return (
    <div className="App">
      <Header title = "hello"/>
      <Counters/>
    </div>
  );
}

export default App;