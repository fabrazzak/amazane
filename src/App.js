
import './App.css';
import Header from './components/Header/Header';
import Shopping from './components/Header/Shopping';
import { Route, Routes } from 'react-router-dom';
import Order from './components/Order/Order';
import OrderReview from './components/OrderReview/OrderReview';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Unknown from './components/Unknown/Unknown';
import Login from './components/Login/Login';
import SignUp from './components/Signup/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';


function App() {
  return (
    <div className=''>

      <Header></Header>
      <Routes>
        <Route path='/' element={<Shopping></Shopping>}></Route>
        <Route path='shop' element={<Shopping></Shopping>}></Route>
        <Route path='order' element={<Order></Order>}></Route>
        <Route path='order-review' element={<OrderReview></OrderReview>}></Route>
        <Route path='manage-inventory' element={

          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='shipment' element={
          <RequireAuth>
            <Shipment></Shipment>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<Unknown></Unknown>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      
      
      
     
    </div>
  );
}

export default App;
