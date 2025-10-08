import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <div className='bg-[#D7D7D7]'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;