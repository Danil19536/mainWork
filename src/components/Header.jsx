import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

// file
import HeaderMenu from "./headerMenu/HeaderMenu";

const Header = () => {
  return (
    <header>
      <div className="headerWrapper">
        <div className="container">
          <div className="contentWrapper">
            <div className="wrapperTimeAndnumber">
              <div className="time">
                <AiOutlineClockCircle />
                <div>
                  Mon-Fri:{" "}
                  <span className="dedicatedText">9:00am - 9:00pm</span>
                </div>
              </div>
              <div className="number">
                <AiOutlinePhone />
                <div>
                  phone Call us:
                  <span className="dedicatedText">+1-202-555-0168</span>
                </div>
              </div>
            </div>
            <div className="warpperLanguageAndCurrency">
              <div className="language">
                Language: <span className="dedicatedText">English</span>
              </div>
              <div>
                Currency: <span className="dedicatedText">USD$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderMenu />
    </header>
  );
};

export default Header;
