import "./App.css";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  
  return (
    <div className="App">
      <Navbar title="TextUtils" />
      <div className="container my-3">
      <TextForm heading="Enter the Text for conversion"/>
      </div>
    </div>
  );
}

export default App;
