import React, { useState, useEffect } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { isEmpty } from 'lodash'
import './BoardContent.scss'
import Column from 'components/Column/Column'
import { mapOrder } from 'untilities/sort'
import { initialData } from 'actions/initialData'

function BoardContent() {
  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const boarFromDB = initialData.boards.find(board => board.id === 'board-1')
    if (boarFromDB) {
      setBoard(boarFromDB)

      setColumns(mapOrder(boarFromDB.columns, boarFromDB.columnOder, 'id'))
    }
  }, [])
  if (isEmpty(board)) {
    return <div className="not-found" style={{ 'padding':'10px', 'color':'white' }}>Board not Found</div>
  }

  const onColumnDrop = (dropResult) => {
    // eslint-disable-next-line no-console
    console.log(dropResult)
  }

  return (
    <div className='board-content'>
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={index =>
          columns[index]
        }
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'column-drop-preview'
        }}
      >
        {columns.map((column, index) => (
          <Draggable key={index}>
            <Column column = {column} />
          </Draggable>
        ))}
      </Container>
    </div>
  )
}
export default BoardContent