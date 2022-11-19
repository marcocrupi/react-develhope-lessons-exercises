import React from "react";

class MyList extends React.Component {
  render() {
    const items = this.props.names.map((name, index) => (
      <li key={name + index}>{name}</li>
    ));
    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default MyList;
