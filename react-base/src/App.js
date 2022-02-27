import React from "react";
import { Route, Switch } from "react-router-dom";
import { Chats } from "./routes/Chats";
import { Home } from "./routes/Home";
import { Messages } from "./routes/Messages";
import { Profile } from "./routes/Profile";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={Home}></Route>
        <Route path={"/chats"}>
          <Chats>
            <Route path={"/chats/:chatId"} component={Messages} />
          </Chats>
        </Route>
        <Route path={"/profile"} component={Profile}></Route>
      </Switch>
    </div>
  );
};

export default App;
