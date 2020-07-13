import React from "react";

// Day of week names for use in date-picker heading
const dayOfWeekNames = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه"
];

function DaysOfWeek() {
  return (
    <div className="calendar__weekdays">
      {dayOfWeekNames.map((name, index) => (
        <div className="calendar__weekday" key={index.toString()}>
          <span
            className={`calendar__weekday-info ${index === 6 ? "holiday" : ""}`}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
export default React.memo(DaysOfWeek);
