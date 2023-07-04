import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Componentes/index.css"


import MenuIcon from './Componentes/MenuIcon/MenuIcon';
import Logo from './Componentes/Logo/Logo';
import UserInfo from './Componentes/UserInfo/UserInfo';
import SearchBar from './Componentes/SearchBar/SearchBar';
import Footer from './Componentes/Footer/Footer';
import BookSection from './Componentes/BooksSection/BooksSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <MenuIcon />
      <Logo />
      <UserInfo />
    </header>
      <SearchBar />
      <BookSection />
    <footer>
      <Footer />  
    </footer>
  </React.StrictMode>
);
