import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import './BoardContent.scss';
import Column from "components/Column/Column";
import { mapOrder } from "untilities/sort";
import {initialData} from 'actions/initialData';

function BoardContent() {
    const [board,setBoard] = useState({})
    const [columns,setColumns] = useState([])

    useEffect(() => {
        const boarFromDB = initialData.boards.find(board => board.id === 'board-1')
        if(boarFromDB) {
            setBoard(boarFromDB)
            
            setColumns(mapOrder(boarFromDB.columns,boarFromDB.columnOder,'id'))
        }
    }, [])
    if(isEmpty(board)) {
        return <div className="not-found" style={{'padding':'10px', 'color':'white'}}>Board not Found</div>
    }
return(
    <div className='board-content'>
        {columns.map((column, index) => <Column key={index} column = {column} />)}

</div>
)
}
export default BoardContent;