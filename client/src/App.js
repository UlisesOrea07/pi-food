import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllRecipes } from './services/services'
import Banner from './components/Banner/Banner'
import Description from './components/Description/Description';
import Footer from './components/Footer/Footer';
import Presentation from './components/Presentation/Presentation';
import Layout from './components/Layout/Layout'
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
//Componentes


function App() {
  // const dispatch = useDispatch();
  // const recipes = dispatch(getAllRecipes())
  return (
    <>
      {/* <Layout>
        <Banner />
        <Description />
        <Presentation />
        <Footer />
      </Layout> */}
      <NavBar />
      <SearchBar />
      <Routes>
        <Route
          path='home'
          element={<Cards />}>
        </Route>
      </Routes>
    </>



    // <div className="App">
    //   <h1>Henry Food</h1>
    // </div>
  );
}

export default App;
