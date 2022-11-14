import React from 'react';
import "./App.css"
import Header from './Components/Header';
import  OrderDetails  from './Components/Order_details';
import  Overview  from './Components/Overview';
import Sidebar  from './Components/Sidebar';

const App = () => { 
  return (

    // Home Page
    <div>
      <Header />
      <Sidebar />
      <OrderDetails />
      <Overview />
    </div>
  )
}

export default App;