import React from 'react';
import { UserProvider } from './UserContext';
import Home from './Home';
import HomeFunctional from './HomeFunctional';

function App() {
  const value = {name: 'ved ji', dept: 'java dept'}
  return (
    <UserProvider value={value} >
       <Home />
       <HomeFunctional />
    </UserProvider  >
    
  );
}

export default App;
