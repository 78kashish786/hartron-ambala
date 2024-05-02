import logo from './logo.svg';
import './App.css';
import Main from './comp/Main';
import Footer from './comp/Footer';
import Header from './comp/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.';
import DetailComp from './comp/DetailComp';
import PageNotfound from './comp/PageNotfound';

function App() {
  return (
    <div className="  ">
      <Header/>
      <Main>
      <Routes>
      <Route element={<Home/>} path='/'></Route>
      <Route element={<DetailComp/>}path='/course/:slug'/>
      <Route element={<PageNotfound/>} path="/*"/>
      </Routes>
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
