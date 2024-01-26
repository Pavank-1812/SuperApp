import { BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from "../src/pages/RegisterPage/RegisterPage.js"


function App() {
  return  (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
    // <RegisterPage />
  );
}

export default App;
