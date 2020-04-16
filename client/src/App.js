import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import BlogLists from "./components/BlogLists";
import CreateBlog from "./components/CreateBlog";
import EditBlog from "./components/EditBlog";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={BlogLists} />
          <Route path="/create" component={CreateBlog} />
          <Route path="/update/:id" component={EditBlog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
