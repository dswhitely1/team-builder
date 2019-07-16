import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(0.5),
    },
    chip: {
        margin: theme.spacing(0.5)
    }
}))

function TeamGroupList(props) {
    console.log(props);
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            {props.groups.map(group => {
                return <Chip key={group.id} label={group.team} className={classes.chip}/>
            })}
        </Paper>
    )
}

export default TeamGroupList