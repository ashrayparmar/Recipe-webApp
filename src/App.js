import React, {Component } from 'react';

const App = () => {

  const APP_ID = '74b1c963';
  const API_KEY = '641ce4efe4ceb5ffd8935e653e5debfa';

  const Req = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
