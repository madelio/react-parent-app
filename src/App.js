import './App.css';
import SampleHeader from './components/SampleHeader';
import SearchInput from './components/SearchInput'

function App() {
  function onClick () {
    alert()
  }
  return (
    <div className="App">
      <SampleHeader />
      <SearchInput />
    </div>
  );
}

export default App;
