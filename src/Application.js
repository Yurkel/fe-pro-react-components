import React from 'react';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import { links } from './LinksData';
import { notes } from './NotesData';

const Application = () => {
  return (
    <div className="wrapper">
      <Header links={links} />
      <Content notes={notes} />
      <Footer logo="Logo" copyright="Small static blog @ 2022" />
    </div>
  );
};

export default Application;
