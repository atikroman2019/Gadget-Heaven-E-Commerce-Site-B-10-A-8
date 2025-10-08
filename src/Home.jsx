import Products from './Products';
import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    document.title = "Home | Gadget Heaven";
  }, []);
    return (
      
      <div className='bg-[#D7D7D7]'>
      <Products></Products>
      </div>

    );
};

export default Home;