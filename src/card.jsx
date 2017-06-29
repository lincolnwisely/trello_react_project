import React from 'react';

/* Define Card Component Here*/
class Card extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      complete: false,
    }
    this._markComplete = this._markComplete.bind(this);
    }

  render() {

    // – In the render section, create a variable called completeButton, if card is not complete, set it to the green arrow JSX.
    //
    // – Use the new completeButton variable in the returned JSX code block.
    //

    let buttonComplete = null;
    if (this.state = {complete : false}) {
      buttonComplete = <button className="complete-card" onClick={ this._markComplete }>></button>;
      console.log ('it works');
    };

    return(
      <div className="card">
        <div className="title">{ this.props.title }</div>
        <div className="description">{ this.props.description }</div>
        <div className="actions">
          <button className="delete-card" >X</button>
          { buttonComplete }
        </div>
      </div>
    );
  }

  _markComplete(e) {
    // when button is clicked, change state to true
    e.preventDefault();
    this.setState({ complete: true });
    console.log(e);
  }

}

Card.defaultProps = {
    title: "Default card title",
    description: "Default card description"
}

export default Card;
