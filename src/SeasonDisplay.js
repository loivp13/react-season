import "./SeasonDisplay.css";
import React, { Component } from "react";
const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Brr it is chilly",
    iconName: "snowflake"
  }
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

class SeasonDisplay extends Component {
  render() {
    const season = getSeason(this.props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    );
  }
}

export default SeasonDisplay;
