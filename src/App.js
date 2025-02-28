import { Routes, Route } from "react-router-dom";
import './App.css';
import  Appbar from './component/Appbar'
import Home  from './Pages/home'

function App() {
  return (
    <div className="App">
      <Appbar />
      <Routes>
        <Route path="/" element={<Home  />}/>
      </Routes>
    </div>
  );
}

export default App;

