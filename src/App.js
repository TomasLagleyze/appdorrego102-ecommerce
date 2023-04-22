import './App.css';
import Navbar from './components/navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './components/Notification/NotificationService';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';





const App = () => {



  return (
    <div className='App'>
        <BrowserRouter>

        <NotificationProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
              <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={'Productos filtrados por categoria'}/>}/>
              <Route path="/item/:productId" element={<ItemDetailContainer />}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
            <Footer/>
          </CartProvider>
          </NotificationProvider>
        </BrowserRouter>
    </div>
  )
}

export default App;


// import './App.css';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Navbar from './components/navbar/navbar';
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import Footer from './components/Footer/Footer';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import { CartProvider } from './context/CartContext';



// function App() {

//   return (
//     <div className="App">
//       <Context.Provider>
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<ItemListContainer/>}/>
//         <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={'Productos filtrados por categoria'}/>}/>
//         <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
//         <Route path="/cart" element={<h1>Cart</h1>}/>
//         <Route path="/checkout" element={<h1>Checkout</h1>}/>
//       </Routes>
//       <Footer/>
//       </BrowserRouter>
//       </Context.Provider>
//     </div>
//   );
// }

// export default App;


