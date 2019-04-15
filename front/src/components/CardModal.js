import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { deleteCard, editCard } from '../actions';
import ContentEditable from 'react-contenteditable'

function getModalStyle() {
    const top = 35;
    const left = 46;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
});

class SimpleModal extends React.Component {
    state = {
        open: false,
        text: this.props.children
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
        const { dispatch, cardID, listID } = this.props;
        const { text } = this.state;
        if (this.props.children !== this.state.text) {
            dispatch(editCard(cardID, listID, text));
        }
    };
    handleDelete = (cardID, listID) => {
        console.log("DELETE", cardID, listID);
        const { dispatch } = this.props;
        dispatch(deleteCard(cardID, listID));
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div onClick={this.handleOpen}>{this.props.children}</div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <ContentEditable
                            innerRef={this.contentEditable}
                            tagName='h3'
                            html={`${this.state.text}`}
                            disabled={false}       // use true to disable editing
                            onChange={this.handleChange}
                        />



                        < Button type="delete" onClick={() => this.handleDelete(this.props.cardID, this.props.listID)}>Delete</Button>

                        <SimpleModalWrapped />
                    </div>
                </Modal>
            </div >
        );
    }
};

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired
};

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default connect()(SimpleModalWrapped);