import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">{this.props.message}</div>
      </div>
    );
  }
}

Spinner.defaultProps = {
  message: "Loading"
};

export default Spinner;
