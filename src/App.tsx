import './App.css';
import { Ballondor } from './components/Ballondor';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>HEYHEYHEY</Heading>
      <Ballondor><Heading>Ballon-dor goes to Lionel Messi!</Heading></Ballondor>
      <Greet name="Paul" isLoggedIn={true} />
    </div>
  );
}

export default App;
