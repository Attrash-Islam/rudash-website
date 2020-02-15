import React from 'react';
import Header from '../components/Header';
import DocumentationGenerator from '../components/DocumentationGenerator';
import './globalStyles.scss';

export default function App() {
  return (
    <div className="rudash-website">
      <Header/>
      <DocumentationGenerator/>
    </div>
  );
};
