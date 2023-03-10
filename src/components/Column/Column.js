import React from "react";
import './Column.scss';
import { mapOrder } from "untilities/sort";
import Card from "components/Card/Card";
function Column(props) {
const { column } = props;
const cards = mapOrder(column.cards,column.cardOder,'id');
   
return(
    <div className='column'>
    <header>{column.title}</header>
  <ul className="card-list">
   {cards.map((card,index) =><Card key={index} card={card} /> )}   
  </ul>
  <footer>Add another card</footer>
  </div>
)
}
export default Column;
