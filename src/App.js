import React, { Component } from 'react';
import './App.css';
import Home from  './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
              <header className="site-header">
              </header>

              <main className="site-main">
                  <section className="section">
                     <Home />
                  </section>
              </main>

              <footer className="site-footer">
              </footer>
          </div>
      </div>
    );
  }
}

export default App;
