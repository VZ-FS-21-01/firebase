import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import { useState } from 'react';
import Login from './components/Login';
import About from './components/About';
import FileUpload from './components/FileUpload';
import FireStore from './components/FireStore';

function App() {
  const [user, setUser] = useState(null)
  return (
    <Router>
      <div>
        <Nav user={user} />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/" exact>
            <Home setUser={setUser} user={user} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} user={user} />
          </Route>
          <Route path="/about">
            <About user={user} />
          </Route>
          <Route path="/file-upload">
            <FileUpload user={user} />
          </Route>
          <Route path="/db">
            <FireStore />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
