

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cities from './pages/Cities';

function App() {
  return (
    <>



      <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/cities" element={<Cities/>} />

          <Route path="/cities/:id" element={<Cities/>} />

      </Routes>

      
      


     
    </>
  );
}

export default App;
