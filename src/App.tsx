import './App.css';
import { Ballondor } from './components/Ballondor';
import { Heading } from './components/Heading';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>HEYHEYHEY</Heading>
      <Ballondor><Heading>Ballon-dor goes to Lionel Messi!</Heading></Ballondor>
    </div>
  );
}

export default App;
