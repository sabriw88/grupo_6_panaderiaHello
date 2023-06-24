/* import logo from './logo.svg'; */
import './App.css';
import { useState } from "react";
import { useEffect } from "react";
import ContentRow from './components/contentRow';
import ContentWrapper from './components/contentWrapper';
import Categorias from './components/panelCategorias';
import ProductByCategory from './components/ProductByCategory';
import TableProducts from './components/tableProducts';
import React from 'react';
import '../src/assets/css/app.css';


function App() {

  return (
    <React.Fragment >
      <div className='body'>
        <h2 className='titulo'>App Dashboard</h2>

        <ContentRow/>
        <ContentWrapper/>
        <Categorias/>


      </div>
    </React.Fragment>

  )
}

export default App;
