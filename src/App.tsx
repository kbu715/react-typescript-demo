import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne"
  }

  const nameList = [
    {
      first: "Lionel",
      last: "Messi"
    },
    {
      first: "Cristiano",
      last: "Ronaldo"
    },
    {
      first: "Heungmin",
      last: "Son"
    }
  ]

  return (
    <div className="App">
      <Greet name="xxx" messageCount={15} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList nameList={nameList} />
    </div>
  );
}

export default App;
