import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Statistics from './Statistics';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Products from './Products';

const Home = () => {
    return (
      <div className='bg-[#D7D7D7]'>
        <Navbar></Navbar>
        <Products></Products>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>

    );
};

export default Home;