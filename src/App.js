import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import OnBoarding from './pages/OnBoarding';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';

// To do Routing// npm i react-router-dom
// import BrowserRouter, Routes and Route
// Browser Routers -> Routes -> Route - pages passed like props to the element
// Remember to start routers and react

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
   <Route path={"/"} element={<Home />}/>
   <Route path={"/dashboard"} element={<Dashboard />}/>
   <Route path={"/onboarding"} element={<OnBoarding />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
