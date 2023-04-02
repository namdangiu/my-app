import React from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import './Column.scss'
import { mapOrder } from 'untilities/sort'
import Card from 'components/Card/Card'
function Column(props) {
  const { column } = props
  const cards = mapOrder(column.cards, column.cardOder, 'id')
  const onCardDrop = (dropResult) => {
    // eslint-disable-next-line no-console
    console.log(dropResult)
  }
  return (

    <div className='column'>
      <header className='column-drag-handle'>{column.title}</header>
      <div className="card-list">
        <Container
          orientation="vertical"
          groupName="nam-columns"
          onDrop={onCardDrop}
          getChildPayload={index => cards[index]
          }
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'card-drop-preview'
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index}>
              <Card card={card} />
            </Draggable>
          ) )}
        </Container>
      </div>
      <footer>Add another card</footer>
    </div>
  )
}
export default Column
