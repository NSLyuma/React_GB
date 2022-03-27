import React from "react";
import { Provider } from "react-redux";
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
import { store } from "./store";

const App = () => {
  return (
    <div style={{ marginLeft: 30 }}>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path={getHomeLink()} component={Home}></Route>
          <Route path={getChatsLink()}>
            <Chats>
              <Switch>
                <Route path={getMessagesLink()} component={Messages} />
                <Route path={getNotFoundLink()} component={NotFound} />
              </Switch>
            </Chats>
          </Route>
          <Route path={getProfileLink()} component={Profile}></Route>
        </Switch>
      </Provider>
    </div>
  );
};

export default App;
