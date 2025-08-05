import { Routes, Route } from 'react-router-dom';
import LandingPageMain from './pages/landingPage/LandingPageMain';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPageMain />} />
      </Routes>
    </>
  )
}

export default App