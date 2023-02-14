import './App.css';

// firebase
import { auth } from './firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// context
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

// Pages
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {

  // User
  const { user, setUser } = useContext(UserContext)

  onAuthStateChanged(auth, user => {
    if(user) {
      setUser(user)
    }
    else {
      setUser(null)
    }
  })


  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to="/login" />}/>
          <Route path='/register' element={user ? <Navigate to="/" /> : <Register />}/>
          <Route path='/login' element={user ? <Navigate to="/" /> : <Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
