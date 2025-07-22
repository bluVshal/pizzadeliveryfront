import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nunavbar from './components/navbar';
import Nuhome from './screens/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nunavbar />
        <Nuhome />
      </header>
    </div>
  );
}

export default App;
