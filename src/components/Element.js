
import React from 'react';
import Moment from 'react-moment';
function Element(props) {
  function kFormatter(num) {
    if (num < 1e3) return num;
    if (num >= 1e3 && num < 1e6) return +(num / 1e3).toFixed(1) + "K";
    if (num >= 1e6 && num < 1e9) return +(num / 1e6).toFixed(1) + "M";
    if (num >= 1e9 && num < 1e12) return +(num / 1e9).toFixed(1) + "B";
    if (num >= 1e12) return +(num / 1e12).toFixed(1) + "T";
  };
  return (
    <div  className="Element">
      <div className="avatar">
        <img src={props.image} alt=""/>
      </div>
      <div className="info">
            <h3> {props.name} </h3>
            <p> {props.repodescription} </p>
              <div className="rationdte">
                <span> {kFormatter(props.stars)} <i className="fas fa-star"></i> </span>
                <span> {props.issues} issues </span>
                <span> Submited <Moment fromNow ago>{props.sumited_at}</Moment> by {props.owner}</span>
              </div>
      </div>
    </div>
  );
}

export default Element;
