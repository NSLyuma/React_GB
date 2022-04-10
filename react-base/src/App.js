import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components";
import {
  getChatsLink,
  getGistsLink,
  getHomeLink,
  getLoginLink,
  getMessagesLink,
  getNotFoundLink,
  getProfileLink,
  getRegistrationLink,
} from "./navigation";
import { Chats } from "./routes/Chats";
import { Home } from "./routes/Home";
import { Messages } from "./routes/Messages";
import { NotFound } from "./routes/NotFound";
import { Profile } from "./routes/Profile";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Gists } from "./routes/Gists";
import { Login } from "./routes/Login";
import { Registration } from "./routes/Registration";

const App = () => {
  return (
    <div style={{ marginLeft: 30 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Switch>
            <Route exact path={getHomeLink()} component={Home} />
            <Route path={getLoginLink()} component={Login} />
            <Route path={getRegistrationLink()} component={Registration} />
            <Route path={getGistsLink()} component={Gists} />
            <Route path={getChatsLink()}>
              <Chats>
                <Switch>
                  <Route path={getMessagesLink()}>
                    <Messages />
                  </Route>
                  <Route path={getNotFoundLink()} component={NotFound} />
                </Switch>
              </Chats>
            </Route>
            <Route path={getProfileLink()} component={Profile} />
          </Switch>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
