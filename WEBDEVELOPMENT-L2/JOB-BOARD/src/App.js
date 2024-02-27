import './App.css';
import Home from './Pages/Home/Home';
import JobSearch from './Pages/JobSearch/JobSearch';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-jobs' element={<JobSearch />} />
      </Routes>
    </>
  );
}

export default App;
