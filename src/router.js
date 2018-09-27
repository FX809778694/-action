import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Index from './page/Index'
import Test from './page/Test'
import Login from  './page/Login'
import HeaderNav from './component/HeadNav'

const RootRouter = () => (
  <BrowserRouter>
    <div className="App">
      <HeaderNav/>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default RootRouter;