import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';

function App() {
  return (
   <div>
    <Navbar/>
    <div className='bg-green-600 w-full h-screen'></div>
    <Footer/>
   </div>
  );
}

export default App;
