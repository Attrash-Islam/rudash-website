import React from "react";
import ReactDOM from "react-dom";
import './globalStyles.scss';
import Header from './components/Header';
import DocumentationGenerator from './components/DocumentationGenerator';

function App() {
  return (
    <>
      <Header/>
      <DocumentationGenerator/>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
