import { Route, Routes, BrowserRouter } from 'react-router-dom';
import firebase from '../firebase/firebase';
import Home from '../pages/Home';
import About from '../pages/About';

function App() {
  console.log(firebase);

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
  );
}

export default App;
