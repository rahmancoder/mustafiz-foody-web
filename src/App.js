import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Background from './Components/Background/Background';
import AllFood from './Components/AllFood/AllFood';
import Footer from './Components/Footer/Footer';
import Experience from './Components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Background></Background>
      <AllFood></AllFood>
      <Experience></Experience>
      <Footer></Footer>

    </div>
  );
}

export default App;
