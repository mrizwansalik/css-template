import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home';
import Topics from './Topics';

const App = () => {
  return ( <div>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
          </ul>
          
          <Route exact path='/' component={Home} />
          <Route path='/topics' component={Topics} />
        </div>
  </div> );
}

export default App;