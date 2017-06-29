import React from 'react';
import Card from './card.jsx';
/* Column Component */
class CardColumn extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._getCards = this._getCards.bind(this);
    }

    render() {
      return (
          <div id="up-next" className="card-column">
              <div className="card-column-title">Up Next</div>
              <div className="card-list">
                  { this._getCards() }
              </div>
          </div>
        );
    }

   _getCards() {
    var cardList = [
      {
        id: 0,
        title: "Finish Trello React Project",
        description: "Complete the Trello project so I can help other CoderGirls!"
      },
      {
        id: 1,
        title: "ES6 for Everyone: Tutorial 1",
        description: "Start Wes Boss' ES6 for Everyone Course"
      },
      {
        id: 2,
        title: "Feed the doggos",
        description: "Two scoops for Vince. One scoop for Tony!"
      }
    ];


    //  mapCards(cardList) {
    //   return cardList.map( (cardobject, index) =>
    //   <Card key={ cardobject.index.toString() } title={ cardobject.title } description={ cardobject.description } /> );
    // }

    //
    var mapCards = cardList.map((cardobject) => {
        return (<Card key={ cardobject.id } title={ cardobject.title } description={ cardobject.description } />
        );
      }
    );

    return mapCards;

    // cardList.map() => {
    //   return <Card key={ Card.key } title={ Card.title } description={ Card.description } />;
    //   return <Card key={ cardlist.id } title={ cardlist.title } description={ cardlist.description } />;
    //
    // }

    console.log("WHAT?");

  }
}

export default CardColumn;
