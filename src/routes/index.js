import React from "react";
import Explore from '../pages/Explore'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

/**
 * @description Routes list
 * @returns {object} the component
 */
const Routes = () => ( 
  <Switch>
      {/* <Route path='/' component={page} />  */}
      <Route name="home" path='/explore' component={ Explore } />
  </Switch>
);

export default Routes;