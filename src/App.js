import React from 'react';
import Feed from './components/feed';
import Header from './components/header'
import Login from './components/Login/Login';
import Sidebar from './components/sidebar';
import Widget from './components/Widget/Widget';
import {useStateValue} from './StateProvider';

const App = () => {
  const [state] = useStateValue();

  return (
      <div className="app">
        {!state.user ? (
          <Login/>
        ) : (
          <>
            <Header/>
            <div className="app__body">
              <Sidebar/>
              <Feed/>
              <Widget/>
            </div>
          </>
        )}
      </div>
  );
};

export default App;
