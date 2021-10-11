import './App.css';
import { Text } from './components/polymorphic/Text';

function App() {
  return (
    <div className="App">
      <Text as="h3" size="sm">sm</Text>
      <Text as="h2" size="md">md</Text>
      <Text as="h1" size="lg">lg</Text>
    </div>
  );
}

export default App;
