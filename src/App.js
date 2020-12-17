import React from 'react';
import Feed from './components/feed';
import Header from './components/header'
import Login from './components/Login/Login';
import Sidebar from './components/sidebar';

const App = () => {
  const user = null;

  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <>
          <Header/>
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            {/* Widgets */}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
