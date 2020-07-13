import React, { useState } from "react";
import ReactDOM from "react-dom";

import DatePicker from "./DatePicker";

function Example() {
  const [selectedDate, setSelectedDate] = useState(null);

  React.useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  return (
    <div>
      <DatePicker selectedDate={selectedDate} onDayClick={setSelectedDate} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>,
  rootElement
);
