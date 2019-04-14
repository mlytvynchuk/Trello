import React from 'react'
import TrelloCard from './TrelloCard'
import TrelloActionButton from './TrelloActionButton'
const TrelloList = ({ title, cards, listID }) => {
    return (
        <div style={styles.container}>
            <h3>{title}</h3>
            {cards.map(card => (<TrelloCard key={card.id} text={card.text} />))}
            <TrelloActionButton listID={listID} />
        </div>
    )
}
const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 7,
        marginRight: 8
    }
}
export default TrelloList;