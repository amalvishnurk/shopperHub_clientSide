import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
// import { createContext } from 'react';
// import { useContext } from 'react';

// const MyContext = createContext();

function App() {
  // const myFunction  = useContext(MyContext);
  // console.log('my function',myFunction&&myFunction);

  return (
    <div className="App">
      {/* <MyContext.Provider value={myFunction&&myFunction}> */}
      <header>
        <Header />
      </header>

      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
      {/* </MyContext.Provider> */}
    </div>
  );
}

export default App;
