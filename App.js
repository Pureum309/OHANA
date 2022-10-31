import 'react-native-gesture-handler'

import React from "react";

import Navigation from './comps/Navigation';
import UserContext from './UserContext';

export default function App() {
  return (
    <UserContext.Provider>
      <Navigation />
    </UserContext.Provider>
  );
}


