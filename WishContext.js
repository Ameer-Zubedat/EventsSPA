import React from 'react';

const WishContext = React.createContext({
  name: '',
  userID: 1,
  history: '',
  register: (username, email, password) => { },
  login: (email, userId) => { },
  logout: () => { },
  getHistory: (history) => { },
  createNewEvent: (title, category, startDate, endDate, location, userId) => { }
});

export default WishContext;