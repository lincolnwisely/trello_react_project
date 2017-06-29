import React from 'react';

/* Define Card Component Here*/
class Card extends React.Component {
  render() {
    return(
      <div className="card">
        <div className="title">{this.props.title}</div>
        <div className="description">{this.props.description}</div>
        <div className="actions">
          <button className="delete-card">X</button>
          <button className="complete-card">></button>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
    title: "Default card title",
    description: "Default card description"
}

export default Card;
