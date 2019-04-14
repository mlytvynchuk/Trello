import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';
class TrelloActionButton extends Component {
    state = {
        formOpen: false,
        text: ""
    }
    handleChangeTextArea = e => {
        this.setState({
            text: e.target.value,
        })
    }
    renderForm = () => {
        const { list } = this.props;
        const placeholder = list ? "Enter a list title..." : "Enter a title for this card...";
        const buttonText = list ? "Add List" : "Add Card";

        return <div className="add-form-content" onBlur={this.closeForm}>
            <Card>
                <Textarea className="add-textarea" placeholder={placeholder} value={this.state.text} onChange={this.handleChangeTextArea} autoFocus />
            </Card>
            <div className="action-box-group">
                <Button onMouseDown={list ? this.handleAddList : this.handleAddCard} variant="contained" style={{ color: "white", background: "#5aac44", textTransform: "none", marginTop: 15 }}>{buttonText}</Button>
                <Icon className="close-icon" onClick={this.closeForm}>close</Icon>
            </div>
        </div>
    }
    openForm = () => {
        this.setState(
            { formOpen: true, }
        )
    }
    closeForm = () => {
        this.setState(
            { formOpen: false, }
        )
    }
    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;
        if (text) {
            dispatch(addList(text));
            this.setState({
                text: ""
            })
        }
        return;
    }
    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;
        if (text) {
            dispatch(addCard(listID, text));
            this.setState({
                text: ""
            })
        }
    }


    renderAddButton = () => {
        const { list } = this.props;
        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";
        return (
            <div>
                <div className="add-button" onClick={() => this.openForm()} style={{ opacity: buttonTextOpacity, color: buttonTextColor, backgroundColor: buttonTextBackground }}>
                    <Icon>add</Icon>
                    <p>{buttonText}</p>
                </div>
            </div>
        )
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();

    }
}

export default connect()(TrelloActionButton);
