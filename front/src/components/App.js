import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';
class App extends Component {
  onDragEnd = (result) => {
    // TODO : reorder logic
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    ));
  }
  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h1>Trello Application</h1>
          <Droppable droppableId="our-list">

          </Droppable>
          <div className="list-container">
            {lists.map(list => (
              <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
            ))}
            <TrelloActionButton list />
          </div>
        </div>
      </DragDropContext>
    );
  }
}
const mapStateToProps = (state) => ({
  lists: state.lists
})
export default connect(mapStateToProps)(App);
