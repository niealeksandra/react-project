import { Navigate, Route, Routes } from 'react-router-dom';
import './styles/globals.scss';
import Home from './pages/home';
import Users from './pages/users';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route
          path="*"
          element={ <Navigate to="/home" /> }
        />      
      </Routes>
    </>
  );
}

export default App;
