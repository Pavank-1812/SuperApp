import { BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from "../src/pages/RegisterPage/RegisterPage.js"
import Genre from "../src/pages/GenrePage/Genre.js"


function App() {
  return  (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/genre' element={<Genre />} />
      </Routes>
    </BrowserRouter>
    // <RegisterPage />
  );
}

export default App;
