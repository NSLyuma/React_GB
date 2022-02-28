import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components";
import {
  getChatsLink,
  getHomeLink,
  getMessagesLink,
  getNotFoundLink,
  getProfileLink,
} from "./navigation";
import { Chats } from "./routes/Chats";
import { Home } from "./routes/Home";
import { Messages } from "./routes/Messages";
import { NotFound } from "./routes/NotFound";
import { Profile } from "./routes/Profile";

const App = () => {
  return (
    <div style={{ marginLeft: 30 }}>
      <Header />
      <Switch>
        <Route exact path={getHomeLink()} component={Home}></Route>
        <Route path={getChatsLink()}>
          <Chats>
            <Route path={getMessagesLink()} component={Messages} />
            <Route path={getNotFoundLink()} component={NotFound} />
          </Chats>
        </Route>
        <Route path={getProfileLink()} component={Profile}></Route>
      </Switch>
    </div>
  );
};

export default App;
