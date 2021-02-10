import List from './list/List'
import './App.css';
import Add from './list/Add';
import Edit from './modal/Edit'
import {BrowserRouter as Router,Switch,Route,Link,useParams} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>TO DO APP</h1>
      <Add></Add>
      <List></List> 
    </div>
  );
}

export default App;
