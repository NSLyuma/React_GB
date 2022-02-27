import React from "react";
import "./App.sass";
import style from "./App.module.sass";
import { Route, Switch } from "react-router-dom";
import { Home } from "./routes/Home";
import { Projects } from "./routes/Projects";
import { Tasks } from "./routes/Tasks";
import { Task } from "./routes/Task";
import { Header } from "./components/Header";
import {
  getHomeLink,
  getProjectsLink,
  getTaskLink,
  getTasksLink,
} from "./navigation";

const App = () => {
  return (
    <div className={style.body}>
      <Header />
      <Switch>
        <Route exact path={getHomeLink()} component={Home}></Route>
        <Route path={getProjectsLink()}>
          <Projects>
            <Switch>
              <Route path={getTaskLink()} component={Task} />
              <Route path={getTasksLink()} component={Tasks} />
            </Switch>
          </Projects>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
