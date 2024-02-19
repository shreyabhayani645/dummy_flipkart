import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './Header';
import Single_itm from './Single_itm';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={ <Header></Header>} />
        <Route path="Single_itm/:id" element={ <Single_itm></Single_itm> } />
        <Route path="/cart" element={ <Cart></Cart>} />
      </Routes>
        
    </div>
  );
}

export default App;
