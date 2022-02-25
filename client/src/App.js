import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LandingLayout from './components/Layout/LandingLayout'
import { getAllRecipes } from './actions/index'
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Form from './components/Recipes/Form';
import Details from './components/Details/Details';
//Componentes


function App() {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getAllRecipes())
  }, [dispatch])

  const recipes = useSelector(state => state.recipesLoaded)
  return (
    <>
      <NavBar />
      <SearchBar recipes={recipes} />
      <Routes>
        <Route
          path='/'
          element={<LandingLayout />} />
        <Route
          path='home'
          element={<Cards />} />
        <Route
          path='/detail/:id'
          element={<Details />} />
        <Route
          pat='add'
          element={<Form />} />
      </Routes >
    </>
  );
}

export default App;
