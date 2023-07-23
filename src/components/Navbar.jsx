import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';
import { useState } from 'react';
import { styles } from '../styles';

const Navbar = () => {
  const second =1;
  const [first, setFirst] = useState(second);


  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-5 z-20 bg-primary`}>

    </nav>
  )
}

export default Navbar;