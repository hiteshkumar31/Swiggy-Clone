import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./components/Restaurant";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router';
import RestaurantMenu from "./components/RestaurantMenu";
import SearchFood from "./components/SearchFood";
import RestHeader from "./components/RestHeader";
import SecondaryHome from "./components/SecondaryHome";
import { stores } from "./Stored/stores";
import { Provider } from "react-redux";
import Checkout from "./components/Checkout";

function App() {

  return (
    <>
    <Provider store={stores}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route element={<SecondaryHome/>}>
            <Route path="/restaurant" element={<Restaurant/>} />
            <Route path="/city/delhi/:id" element={<RestaurantMenu/>}/>
            <Route path="/city/delhi/:id/search" element={<SearchFood/>}/>
          </Route>
          <Route path="/Checkout" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
