import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const TrelloCard = ({ text }) => {
    return (
        <Card style={styles.cardContent}>
            <CardContent>
                <Typography gutterBottom>
                    {text}
                </Typography>
            </CardContent>

        </Card>
    )
}
const styles = {
    cardContent: {
        marginBottom: 8
    }
}
export default TrelloCard
