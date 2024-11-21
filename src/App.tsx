
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home.tsx'; 
import Apropos from './pages/Apropos/Apropos.tsx'; 
import LogementPage from './pages/LogementPage/LogementPage.tsx';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import Error404 from './pages/Error404/Error404.tsx';


export default function App() {

  return (
    <>     
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<LogementPage />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer/> 

    </>
  )
}

