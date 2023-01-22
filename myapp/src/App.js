import './css/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login_page from './pages/Login_page/Login_page';
import { Login_modules } from './component/modules/Login_modules/Login_modules';
import { Register_modules } from './component/modules/Register_modules/Register_modules';
import { Main_page } from './pages/main_page/Main_page';
import { Main_title_modules } from './component/modules/Main_title_modules/Main_title_modules';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header /> */}
        <Routes>
          <Route path="/DDudo-Frontend" element={<Login_page />}>
            <Route path="/DDudo-Frontend" element={<Login_modules />}/>
            <Route path="/DDudo-Frontend/register" element={<Register_modules />} />
          </Route>
          <Route path="/DDUdo-Fronted/main-page" element={<Main_page />} />
          <Route path="/DDUdo-Fronted/main" element={<Main_title_modules />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
