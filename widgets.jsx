import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';
import Weather from './weather';

const panes = [
  {
    title: "One",
    content: "I am the first"
  },
  {
    title: "Two",
    content: "I am the second"
  },
  {
    title: "Three",
    content: "I am the third"
  }
];

const Widgets = () => (
  <div>
    <Tabs panes={panes}/>
    <Weather />
  </div>
);

export default Widgets;
