import './App.css';
import { Navbar } from './components/Navbar';
import { Paragraph } from './components/Paragraph';
import { Input } from './components/Input';
import { Myself } from './components/Myself';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Paragraph/>
     <Input></Input>
     <Myself name = "Prince" age = {20} gender = "male" ></Myself>
     <Counter></Counter>
     
    
    </div>
  );
}

export default App;
