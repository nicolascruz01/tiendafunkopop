import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NaviBar from './components/NaviBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Welcome from './components/Welcome';
import CartContext from './context/CartContext';

const App = () => {
  return (
    <CartContext>
      <BrowserRouter>
        <NaviBar />
        <Routes>
            <Route exact path='/' element={ <Welcome/> }/>
            <Route exact path='/productos' element={ <ItemListContainer/> }/>
            <Route exact path='/category/:category' element={ <ItemListContainer/> }/>
            <Route exact path='/itemdetail/:id' element={ <ItemDetailContainer/> }/>
            <Route exact path='/cart' element={ <Cart/> }/>
          </Routes>
      </BrowserRouter>
    </CartContext>    
  )
};

export default App
