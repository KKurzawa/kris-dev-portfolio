import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5500);
  }, []);

  if (isLoading) {
    return <Landing />;
  }
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App