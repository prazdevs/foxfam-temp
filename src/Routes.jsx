import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <h1>index</h1>} />
      <Route exact path="/standings" component={() => <h1>standings</h1>} />
      <Route exact path="/players" component={() => <h1>players</h1>} />
      <Route exact path="/teams" component={() => <h1>teams</h1>} />
      <Route exact path="/login" component={() => <h1>login</h1>} />
    </Switch>
  );
};

export default Routes;
