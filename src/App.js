import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Portfolio from './portfolio';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  )
}

export default App;
