import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Background from './Components/Background/Background';
import AllFood from './Components/AllFood/AllFood';
import Footer from './Components/Footer/Footer';
import Experience from './Components/Experience/Experience';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUP/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Background></Background>
      <AllFood></AllFood>
      <Experience></Experience>
      <Footer></Footer> */}
      <Router>
        <Header></Header>
        <Background></Background>
        <Switch>
          <Route exact path="/">

          </Route>




          <Route exact path="/signin">
            <SignIn></SignIn>
          </Route>

          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
