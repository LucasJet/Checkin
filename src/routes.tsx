import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ClassList from "./pages/ClassList";
import ClassForm from "./pages/ClassForm";
import UserList from "./pages/UserList";
import UserForm from "./pages/UserForm";
import DisciplineList from "./pages/DisciplineList";
import DisciplineForm from "./pages/DisciplineForm";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/class-list" component={ClassList} />
      <Route path="/class-create" component={ClassForm} />
      <Route path="/user-list" component={UserList} />
      <Route path="/user-create" component={UserForm} />
      <Route path="/discipline-list" component={DisciplineList} />
      <Route path="/discipline-create" component={DisciplineForm} />
    </BrowserRouter>
  );
}

export default Routes;
