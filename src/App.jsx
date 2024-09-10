/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import { BrowserRouter,Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SignOut from './pages/SignOut';
export default function App() {
  return <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/sign-in" element={<Signin/>}/>
  <Route path="/sign-up" element={<SignOut/>}/>
  
  </Routes>
 
  
  
  </BrowserRouter>;
  // eslint-disable-next-line react/no-unknown-property
}
