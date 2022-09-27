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
          <Route path="/" exact>
            <Users></Users>
          </Route>
          <Route path="/places/new" exact>
            <NewPlace></NewPlace>
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
