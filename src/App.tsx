import './App.css';
import { CustomComponent } from './components/html/CustomComponent';

function App() {
  return (
    <div className="App">
      <CustomComponent isLoggedIn={true} name="Paul" />
    </div>
  );
}

export default App;
