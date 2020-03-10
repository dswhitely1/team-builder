import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import TeamGroupList from "./TeamGroupList";

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        margin: '20px 0'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function TeamList(props) {
    console.log(props);
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card className={classes.card} raised>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.teamMember.role}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.teamMember.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.teamMember.email}
                </Typography>
                <TeamGroupList groups={props.teamMember.groups} />
            </CardContent>
            <CardActions>
                <Button size='small' component={RouterLink} to={`/edit/${props.teamMember.id}`}>Edit</Button>
                <Button size='small' component={RouterLink} to={`/edit-member-team/${props.teamMember.id}`}>Manage Groups</Button>
            </CardActions>
        </Card>
        </Grid>
    )
}

export default TeamList;