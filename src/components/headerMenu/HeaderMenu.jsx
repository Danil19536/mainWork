import { GoSearch } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { BsBasket } from "react-icons/bs";
import logo from "../../images/Logo.png";

const HeaderMenu = () => {
  return (
    <div className="headermenuWrapper">
      <div className="container">
        <div className="menuWrapper">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menu">
            <div className="menu-item">Home</div>
            <div className="menu-item">Shop</div>
            <div className="menu-item">Pages</div>
            <div className="menu-item">Blog</div>
            <div className="menu-item">Contact</div>
          </div>
          <div className="search">
            <input type="text" className="textSearch" />
            <div className="searchIcon">
              <GoSearch />
            </div>
          </div>
          <div className="personeCabinet">
            <BsPerson />
          </div>
          <div className="basket">
            <BsBasket />
            <div className="producеСounter">2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
