import './App.css';
import { List } from './components/generics/List';

function App() {
  return (
    <div className="App">
      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={item => console.log(item)}
      /> */}
      {/* <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne',
            address: 'LA'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent',
            address: 'Tokyo'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana',
            address: 'Seoul'
          }
        ]}
        onClick={item => console.log(item)}
      />
    </div>
  );
}

export default App;
