import './App.css';
import { About, Home, NotFound, Portfolio } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './layouts/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Main><NotFound /></Main>} />
        <Route path='/' element={<Main><Home /></Main>} />
        <Route path='/about' element={<Main><About /></Main>} />
        <Route path='/portfolio' element={<Main><Portfolio /></Main>} />
      </Routes>
    </Router>
  );
}

export default App;
