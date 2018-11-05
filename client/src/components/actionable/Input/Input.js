import React, { Component } from "react";
import "./Input.css";
import { Link } from "react-router-dom";

export default class Input extends Component {
  constructor(props) {
    super(props);
    if (props.value) {
      this.state = {
        value: props.value
      };
    } else {
      this.state = {
        value: ""
      };
    }
  }

  onChange = async event => {
    await this.setState({ value: event.target.value });
    this.props.onChange(this.state.value);
  };

  render() {
    let textFields =
      this.props.link && this.props.linkName ? (
        <div>
          <p>{this.props.name}</p>
          <Link to={this.props.link}>{this.props.linkName}</Link>
        </div>
      ) : (
        <div>
          <p>{this.props.name}</p>
        </div>
      );
    return (
      <div className="Input">
        <input
          value={this.state.value}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.onChange}
        />
        {textFields}
      </div>
    );
  }
}
