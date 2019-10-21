import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import './globalStyles.scss';

function App() {
  return (
    <>
      <Header/>
      <h2>Stay tuned!</h2>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
