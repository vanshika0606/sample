import React, { useState } from "react";
import "./style.css";
import { GoCalendar } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";

const BelowNavbar = () => {
  const [click, setClick] = useState(false);

  const Click = () => {
    setClick(!click);
  };
  return (
    <div>
      <div className="back-upper"></div>
      <div className="calender">
        <div>
          <div className="checkIn checkin-border">
            <GoCalendar />
            <h5>Check in</h5>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className="checkIn">
            <GoCalendar />
            <h5>Check out</h5>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className="children">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h5>0 adults, 0 children , 0 rooms </h5>

              <MdOutlineKeyboardArrowDown className="arrow" onClick={Click} />
            </div>
            {click && (
              <div className="max-part">
                <br />
                <p style={{ color: "gray", fontSize: "14px" , textAlign:'left',paddingBottom:'5px' }}>Maximum</p>
                <div className="flex-align-justify">
                  <h5>
                    Rooms
                    <br />
                    <span className="max-size">(Max: 8 )</span>
                  </h5>

                  <span className="incre-dcre">
                    <AiOutlineMinusCircle />
                    1
                    <BsPlusCircle />
                  </span>
                </div>
                <div className="flex-align-justify">
                  <h5>
                    Adults
                    <br />
                    <span className="max-size">(Max: 8 )</span>
                  </h5>
                  <span className="incre-dcre" >
                    <AiOutlineMinusCircle />
                    1
                    <BsPlusCircle />
                  </span>
                </div>
                <div className="flex-align-justify">
                  <h5>
                    Childrens
                    <br />
                    <span className="max-size">(Max: 8 )</span>
                  </h5>

                  <span  className="incre-dcre" >
                    <AiOutlineMinusCircle />
                    1
                    <BsPlusCircle />
                  </span>
                </div>

                <div className="done">Done</div>
              </div>
            )}
          </div>
        </div>

        <div className="check-avail">
            <h4 style={{marginLeft:'10px', padding:'9px 30px',backgroundColor:'#d1ad00', borderRadius:'5px', color:'#184301', cursor:'pointer'}} >

            Check Availability
            </h4>
            </div>
      </div>
    </div>
  );
};

export default BelowNavbar;
