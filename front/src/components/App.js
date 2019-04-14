import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';
class App extends Component {
  onDragEnd = (result) => {
    // TODO : reorder logic
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    ));
  }
  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h1>Trello Application</h1>
          <Droppable type="list" droppableId="all-list" direction="horizontal">
            {provided => (
              <div className="list-container" {...provided.droppableProps}
                ref={provided.innerRef}>
                {lists.map((list, index) => (
                  <TrelloList index={index} listID={list.id} key={list.id} title={list.title} cards={list.cards} />
                ))}
                <TrelloActionButton list />
              </div>
            )}
          </Droppable>

        </div>
      </DragDropContext>
    );
  }
}
const mapStateToProps = (state) => ({
  lists: state.lists
})
export default connect(mapStateToProps)(App);
