import React from "react";

import "./Stats.css";

function Stats() {
  const [total, setTotal] = React.useState(89914);
  const [backers, setBackers] = React.useState(5007);
  const [days, setDays] = React.useState(56);

  return (
    <div className="stats">
      <div className="data">
        <ul>
          <li>
            <span>${total}</span> of $100,000 backed
          </li>
          <li
            style={{
              paddingRight: "5rem",
              paddingLeft: "5rem",
              borderRight: " 1px solid hsl(0, 0%, 50%)",
              borderLeft: "1px solid hsl(0, 0%, 50%)",
            }}
          >
            <span>{backers} </span>total backers
          </li>
          <li>
            <span>{days}</span> days left
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Stats;
