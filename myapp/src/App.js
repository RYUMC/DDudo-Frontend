import './css/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login_page from './pages/Login_page';
import Register_page from './pages/Register_page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Login_page />} />
          <Route path="/register*" element={<Register_page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
