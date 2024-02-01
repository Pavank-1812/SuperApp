import { BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from "../src/pages/RegisterPage/RegisterPage.js"
import Genre from "../src/pages/GenrePage/Genre.js"
import HomePage from "./component/Home/Home.js";
import MoviePage from "./pages/MoviesPage/MoviePage.js";
// import { Component } from "react";
// import { useNavigate } from "react-router-dom";


function App() {
  return  (
    <BrowserRouter>
      <Routes>
        <Route path='/genre' element={<Genre />} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/' element={<RegisterPage />} />
        <Route path='/movies' element={<MoviePage />} />
        
      </Routes>
    </BrowserRouter>
    // <RegisterPage />
  );
}

export default App;
