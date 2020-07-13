import React from "react";
import { ArrowLeft, ArrowRight } from "../utils/svgIcons";
import persianNumber from "../utils/persian-number";

function Heading({ month, nextMonth, prevMonth }) {
  return (
    <div className="calendar__header">
      <div className="calendar__month">
        <div className="calendar__change-month-btn" onClick={prevMonth}>
          <ArrowRight />
        </div>
        <span className="calendar__month-name">
          {persianNumber(month.format("jMMMM jYYYY"))}
        </span>
        <div className="calendar__change-month-btn" onClick={nextMonth}>
          <ArrowLeft />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Heading);
