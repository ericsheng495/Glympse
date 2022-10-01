import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* switch = if-else route render */}
        <Switch>
          {/* user path  */}
          <Route path="/" exact>
            <Users />
          </Route>
          {/* place path */}
          <Route path="/places/new">
            <NewPlace></NewPlace>
          </Route>
          {/* redirect route */}
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
