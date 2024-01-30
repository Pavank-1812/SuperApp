import { BrowserRouter, Routes, Route, json} from "react-router-dom"
import { useEffect } from "react";
import RegisterPage from "../src/pages/RegisterPage/RegisterPage.js"
import Genre from "../src/pages/GenrePage/Genre.js"
import HomePage from "./component/Home/Home.js";
import MoviePage from "./pages/MoviesPage/MoviePage.js";
import { Component } from "react";


function App() {
  
  
  useEffect(() => {
    let userDetails = localStorage.getItem("userData");

    if(userDetails) {
      userDetails = JSON.parse(userDetails);
    }

    }, [])

  return  (
    <BrowserRouter>
      <Routes>
        <Route path='/genre' element={<Genre />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/movies' element={<MoviePage />} />
        
      </Routes>
    </BrowserRouter>
    // <RegisterPage />
  );
}

export default App;
