import React from 'react';
import Feed from './components/feed';
import Header from './components/header'
import Sidebar from './components/sidebar';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        {/* Widgets */}
      </div>
    </div>
  );
};

export default App;
