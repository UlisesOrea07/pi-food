import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LandingLayout from './components/Layout/LandingLayout'
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
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getAllRecipes())
  }, [dispatch])

  const recipes = useSelector(state => state.recipesLoaded)
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Principal />} />
        <Route
          path='/home'
          element={<Home recipes={recipes} />} />
        <Route
          path='/details'
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
