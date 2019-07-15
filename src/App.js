import React from 'react';
import './App.css';
import routes from './routes'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <main className="App">
      <Nav/>
      {routes}
      <Footer/>
    </main>
  );
}

export default App;