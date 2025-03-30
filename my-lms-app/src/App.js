import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CoursesPage from './pages/CoursesPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/Courses' element={<CoursesPage />} />
        <Route path='/Login' element={<LoginPage />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
