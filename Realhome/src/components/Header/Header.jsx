import React, {useState} from'react';
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <=800){
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img
          className="logo"
          src="./RealHome-logo.png"
          alt="logo"
          width={100}
        />
        <OutsideClickHandler onOutsideClick={()=> {
          setMenuOpened(false) 
        }}>
        
       
        <div className={`flexCenter h-menu ${menuOpened ? 'open' : ''}`} style={getMenuStyles(menuOpened)}>
          <a href="#">Residencies</a>
          <a href="#">Our Value</a>
          <a href="#">Contact Us</a>
          <a href="#">Get Started As Agent</a>
          <a href="#">Contact</a>
          <button className="button">
            <a href="#">Sign Up</a>
          </button>
          <button className='button'>
            <a href="#">Log In</a>
          </button>
        </div>
          </OutsideClickHandler>
        <div className="menu-icon" onClick= {()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={35} />
        </div>
      </div>
    </section>
  );
};

export default Header;
