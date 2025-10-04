
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar'

function App() {
  return (
  <div>
    <Navbar/>
     <News pageSize={6} country="us"/>
  </div>
  );
}

export default App;
