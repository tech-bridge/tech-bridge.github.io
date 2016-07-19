import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from './components/Main.jsx';
import Sam from './components/camps/Sam.jsx';
import Scratch from './components/camps/Scratch.jsx';
import Web from './components/camps/Web.jsx';
import Python from './components/camps/Python.jsx';
import Shorttime from './components/camps/Shorttime.jsx';
import Oneday from './components/camps/Oneday.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Sam}/>
      <Route path="scratch" component={Scratch} />
      <Route path="web" component={Web} />
      <Route path="python" component={Python} />
      <Route path="shorttime" component={Shorttime} />
      <Route path="oneday" component={Oneday} />
    </Route>
  </Router>,
  document.body.appendChild(document.createElement('div'))
);
