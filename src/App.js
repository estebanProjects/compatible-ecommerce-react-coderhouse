import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './views/Home/Home';
import Category from './views/Category/Category';


const App = () => { 

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home bebidaCtg="Alcoholic" AoC="a" />}></Route>
          <Route path='/category/:id' element={<Category AoC="c" />}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
