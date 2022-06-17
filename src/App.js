import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <Home />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} /> */}
      {/* </Routes> */}
    {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
