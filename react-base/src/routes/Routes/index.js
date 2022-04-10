import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Header } from "../../components";
import { auth } from "../../firebase";
import { PrivateRoute } from "../../hocks/PrivateRoute";
import { PublicRoute } from "../../hocks/PublicRoute";
import {
  getChatsLink,
  getGistsLink,
  getHomeLink,
  getLoginLink,
  getMessagesLink,
  getNotFoundLink,
  getProfileLink,
  getRegistrationLink,
} from "../../navigation";
import {
  Home,
  Login,
  Registration,
  Gists,
  Chats,
  Messages,
  NotFound,
  Profile,
} from "../../routes";
import { store, persistor } from "../../store";

export const Routes = () => {
  const [authed, setAuthed] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });
  }, []);
  return (
    <>
      <Provider store={store}>
        <Header />
        <Switch>
          <PublicRoute
            authenticated={authed}
            exact
            path={getHomeLink()}
            component={Home}
          />
          <PublicRoute
            authenticated={authed}
            path={getLoginLink()}
            component={Login}
          />
          <PublicRoute
            authenticated={authed}
            path={getRegistrationLink()}
            component={Registration}
          />
          <PublicRoute
            authenticated={authed}
            path={getGistsLink()}
            component={Gists}
          />
          <PrivateRoute authenticated={authed} path={getChatsLink()}>
            <Chats>
              <Switch>
                <Route path={getMessagesLink()}>
                  <Messages />
                </Route>
                <Route path={getNotFoundLink()} component={NotFound} />
              </Switch>
            </Chats>
          </PrivateRoute>
          <PrivateRoute
            authenticated={authed}
            path={getProfileLink()}
            component={Profile}
          />
        </Switch>
      </Provider>
    </>
  );
};
