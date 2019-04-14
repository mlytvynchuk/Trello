import React from 'react'
import TrelloCard from './TrelloCard'
import TrelloActionButton from './TrelloActionButton'
import { Droppable, Draggable } from 'react-beautiful-dnd'
const TrelloList = ({ title, cards, listID, index }) => {
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Droppable droppableId={String(listID)}>
                        {provided => (
                            <div style={styles.container}>
                                <div {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    <div>
                                        <h3>{title}</h3>
                                        {cards.map((card, index) => (<TrelloCard index={index} key={card.id} text={card.text} id={card.id} />))}
                                        {provided.placeholder}
                                    </div>
                                    <TrelloActionButton listID={listID} /></div>
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    )
}
const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        height: "100%",
        padding: 8,
        marginRight: 8,

    }
}
export default TrelloList;
