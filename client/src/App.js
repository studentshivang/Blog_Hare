import React from "react";
import { DataProvider } from "./GlobalState";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/headers/Header";
import MainPages from "./components/mainpages/Pages";
import {ToastContainer} from 'react-toastify'
import Footer from "./components/mainpages/utils/footer/Footer";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header/>
          <MainPages/>
          <ToastContainer/>
          <Footer/>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
