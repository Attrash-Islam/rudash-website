import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import DocumentationGenerator from '../components/DocumentationGenerator';
import './globalStyles.scss';

export default function App() {
  return (
    <>
      <Head>
          <title>Rudash - Lodash for Ruby Apps</title>
          <meta name="robots" content="index, follow"/>
          <meta name="description" content="Rudash - The Lodash popular JavaScript library exported as a Gem for Ruby developers"/>
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Rudash Website" />
      </Head>
      <div className="rudash-website">
        <Header/>
        <DocumentationGenerator/>
      </div>
    </>
  );
};
