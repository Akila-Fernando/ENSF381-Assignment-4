import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CoursePage from './pages/CoursesPage';
// import LoginForm from './pages/LoginForm';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/Courses' element={<CoursePage />} />
        {/* <Route path='/Login' element={<LoginForm />} /> */}
      </Routes>
      </BrowserRouter>
  );
}

export default App;
