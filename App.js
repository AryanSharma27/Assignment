
import './App.css';
import Task from './components/Task';

function App() {
  const price1 ="5000"
  const price2="5800"
  return (
   <>
    <h1>Hello In this i have used props to render the price of the product of the
    Task Component</h1>
    <Task cost={price1} cost1={price2}/>
   </>
  );
}

export default App;
