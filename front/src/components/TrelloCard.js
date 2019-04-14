import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Draggable } from 'react-beautiful-dnd';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import CardModal from './CardModal'
const TrelloCard = ({ text, id, index, listID }) => {
    return (
        <Draggable draggableId={String(id)} index={index} >
            {provided => (
                <div className="card-content" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card>
                        <CardContent>
                            <CardModal listID={listID} cardID={id}>{text}</CardModal>
                        </CardContent>
                    </Card>
                </div>
            )}
        </Draggable>

    )
}
export default TrelloCard
