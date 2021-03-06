import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from './actions/index'
import NavBar from './components/NavBar/NavBar';
import Form from './components/Recipes/Form';
import Details from './pages/Details';

import NotFound from './pages/NotFound';
import Home from './pages/Home'
import Principal from './pages/Principal';


//Componentes


function App() {
  const dispatch = useDispatch();
  // const [status, setStatus] = useState(false);
  // useEffect(() => {
  //   dispatch(getAllRecipes())
  //   setStatus(true)
  // }, [dispatch])

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Principal />} />
        <Route
          path='/home'
          element={<Home />} />
        <Route
          path='/details/:id'
          element={<Details />} />
        <Route
          path='add'
          element={<Form />} />
        <Route
          path='*'
          element={<NotFound />} />
      </Routes >
    </>
  );
}

export default App;
