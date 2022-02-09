import React from "react";

const GoTopButton = (props) => {
  return (
    <>
      <div className={props.showGoTop} onClick={props.scrollUp}>
        <button className="goTop">Go to top</button>
      </div>
    </>
  );
};

export default GoTopButton;
