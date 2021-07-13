import React from 'react';

const defaultData = {
  name: 111,
  age: 222
};

const ThemeContext = React.createContext(defaultData);
export default ThemeContext;