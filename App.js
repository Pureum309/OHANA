import 'react-native-gesture-handler'

import React from "react";

import Navigation from './comps/Navigation';
import UserContext from './UserContext';
import IntroScreen from './screen/IntroScreen';

//************ testing tutorial  ***************
import TutorialScreen from './screen/TutorialScreen';

export default function App() {
  return (
    <UserContext.Provider>
      {/* <Navigation /> */}
      <TutorialScreen />
    </UserContext.Provider>
  );
}


