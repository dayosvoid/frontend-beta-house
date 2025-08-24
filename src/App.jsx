import './App.css'
import SignIn from './pages/SignIn'
import HomePage from './pages/HomePage'
import OnboardingPage from './pages/OnboardingPage'
import SignUp from './pages/SignUp'
import ProtectedRoute from './component/ProtectedRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<OnboardingPage/>} path='/'/>
      <Route element={<SignIn/>} path='/login'/>
      <Route element={<SignUp/>} path='/signUp'/>
        <Route element={<ProtectedRoute/>}>
          <Route element={<HomePage/>} path='/HomePage'/>
        </Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
