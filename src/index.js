/* eslint-disable no-restricted-syntax, guard-for-in */
import React from 'react';
import reactDOM from 'react-dom';
import Header from './components/header';
import Navigation from './components/navigation';
import Category from './components/category';
import itemsData from '../data/items.yaml';
import booksData from '../data/books.yaml';
import s from './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <div className={s.categories}>
        <Category
          name="Books"
          categoryData={booksData.all}
          listType="bookCards"
          titleColor="#e970aa"
        />
        <Category
          name="Common"
          categoryData={itemsData.svg}
          listType="defaultCards"
          titleColor="#ad8abf"
        />
        <Category
          name="Easing"
          categoryData={itemsData.common}
          listType="defaultCards"
          titleColor="#72a2cf"
        />
        <Category
          name="SVG"
          categoryData={itemsData.css}
          listType="defaultCards"
          titleColor="#3fc3bf"
        />
        <Category
          name="Scroll"
          categoryData={itemsData.canvas}
          listType="defaultCards"
          titleColor="#67bc97"
        />
        <Category
          name="CSS"
          categoryData={itemsData.scroll}
          listType="defaultCards"
          titleColor="#80b97e"
        />
        <Category
          name="SVG"
          categoryData={itemsData.text}
          listType="defaultCards"
          titleColor="#acb253"
        />
      </div>
    </div>
  );
}

reactDOM.render(<App />, document.getElementById('appWrapper'));
