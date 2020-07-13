import React, { useState, useEffect } from "react";

import DaysViewHeading from "./components/DaysViewHeading";
import DaysOfWeek from "./components/DaysOfWeek";
import Day from "./components/Day";
import { getDaysOfMonth } from "./utils/moment-helper";
import moment from "moment-jalaali";
import { extractWeeks } from "./utils/util-functions";
import "./styles.css";

// Load Persian localisation
moment.loadPersian({ dialect: "persian-modern" });

function DatePicker(props) {
  const [state, setState] = useState({
    month: props.selectedDate || moment(),
    today: moment(),
    selectedDate: props.selectedDate || null,
  });

  useEffect(() => {
    setState((s) => ({ ...s, selectedDate: props.selectedDate }));
  }, [props.selectedDate]);
  const { onDayClick, onMonthChange } = props;

  function nextMonth() {
    setState((s) => ({ ...s, month: s.month.clone().add(1, "jMonth") }));
    if (onMonthChange) {
      const month = state.month.clone().add(1, "jMonth");
      onMonthChange(month);
    }
  }

  function prevMonth() {
    setState((s) => ({ ...s, month: s.month.clone().subtract(1, "jMonth") }));
    if (onMonthChange) {
      const month = state.month.clone().subtract(1, "jMonth");
      onMonthChange(month);
    }
  }

  // For better performance use React useMemo method for get memoized
  // object of month days when month not changed
  let monthDays = React.useMemo(() => getDaysOfMonth(state.month), [
    state.month,
  ]);

  let weeks = React.useMemo(() => extractWeeks(monthDays), [monthDays]);

  function renderDays() {
    const { month, today, selectedDate } = state;
    return (
      <div className="calendar-wrapper">
        <div className="calendar">
          <DaysViewHeading
            month={month}
            nextMonth={nextMonth}
            prevMonth={prevMonth}
          />
          <div className="calendar__body">
            <DaysOfWeek />

            <div className="calendar__month-days">
              {weeks.map((week, index) => (
                <div className="calendar__week" key={index.toString()}>
                  {week.map((day) => {
                    const isToday =
                      today.format("jYYYY-jMM-jDD") ===
                      day.format("jYYYY-jMM-jDD");
                    return (
                      <Day
                        key={day.valueOf()}
                        onClick={onDayClick}
                        day={day}
                        isToday={isToday}
                        isSelectedDay={
                          selectedDate
                            ? selectedDate.format("YYYY-MM-DD") ===
                              day.format("YYYY-MM-DD")
                            : false
                        }
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return renderDays();
}

export default DatePicker;
