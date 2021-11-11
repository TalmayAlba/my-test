import React, { Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header/Header";

class App extends React.Component {

  render() {
    return (
      <Suspense fallback="loading">
        <div className="App">
          <Header />
        </div>
      </Suspense>
    );
  }
}

export default App;
