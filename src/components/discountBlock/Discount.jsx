import { IoIosArrowForward } from "react-icons/io";
const Discount = () => {
  return (
    <div className="container">
      <div className="contentWrapper">
        <div className="mainBlock">
          <div className="mainTitle"></div>
          <div className="mainSubTitle"></div>
          <div className="btnShowAll">
            <button className="showAll">Show all</button>
          </div>
        </div>
        <div className="additionalBlockWrapper">
          <div className="additionalBlocItem">
            <div className="itemTitle"></div>
            <div className="bntShow">
              <button className="showNow">
                Show Now
                <span>
                  <IoIosArrowForward />
                </span>
              </button>
            </div>
          </div>
          <div className="additionalBlocItem">
            <div className="itemTitle"></div>
            <div className="bntShow">
              <button className="showNow">
                Show Now
                <span>
                  <IoIosArrowForward />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
