import './css/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login_page from './pages/Login_page/Login_page';
import { Login_modules } from './component/modules/Login_modules/Login_modules';
import { Register_modules } from './component/modules/Register_modules/Register_modules';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header /> */}
        <Routes>
          <Route path="" element={<Login_page />}>
            <Route path="/" element={<Login_modules />}/>
            <Route path="/register" element={<Register_modules />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
