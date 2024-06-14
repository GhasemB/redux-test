import './App.css';
import Counter from './components/counter/counter';
import Number from './components/number/number';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Number/>
      <Users/>
    </div>
  );
}

export default App;
