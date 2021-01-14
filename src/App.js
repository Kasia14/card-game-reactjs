import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Layout } from './Layout.components';
import CardGameBoard from './CardGameBoard'


const name = "Kasia"

function App() {

  return (
    <>
      <Header welcomeMessage="Witaj!" />
      <Layout>
      <CardGameBoard/>
      </Layout>
    </>
  );
}

export default App;
