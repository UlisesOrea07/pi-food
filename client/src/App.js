import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LandingLayout from './components/Layout/LandingLayout'
import { getAllRecipes } from './actions/index'
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
//Componentes


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipes())
  }, [dispatch])

  return (
    <>

      <NavBar />
      <SearchBar />

      <Routes>
        <Route
          path='/'
          element={<LandingLayout />} />
        <Route
          path='home'
          element={<Cards />} />

      </Routes >
    </>



    // <div className="App">
    //   <h1>Henry Food</h1>
    // </div>
  );
}

export default App;
