import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route exact path='/' element={<Homescreen />}/>
          <Route path='/cart' element={<Cartscreen/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
