import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton'
class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h1>Trello Application</h1>
        <div className="list-wrapper">
          {lists.map(list => (
            <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
          ))}
          <TrelloActionButton list />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  lists: state.lists
})
export default connect(mapStateToProps)(App);
