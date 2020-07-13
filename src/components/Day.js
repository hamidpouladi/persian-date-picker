import React from "react";
import persianNumber from "../utils/persian-number";

export default function Day(props) {
  const { day, isToday, isSelectedDay, onClick } = props;

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    if (onClick) {
      onClick(day);
    }
  }

  return (
    <div className={`calendar__day ${isToday ? "today" : ""}`}>
      <div
        // onMouseLeave={handleMouseLeave}
        data-time={day.valueOf()}
        className={`calendar__day-info ${isSelectedDay ? "selected-day" : ""}`}
        onClick={handleClick}
      >
        <span className="calendar__day-num">
          {persianNumber(day.format("jD"))}
        </span>
      </div>
    </div>
  );
}
