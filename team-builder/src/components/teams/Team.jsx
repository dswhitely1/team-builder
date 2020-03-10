import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container'
import CSSBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid'

import TeamList from './TeamList';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));


function Team(props) {
    const classes = useStyles();
    return (
        <>
            <CSSBaseline/>
            <Container maxWidth='xl' component='section' className={classes.root}>
                <Grid container spacing={3} direction='row' justify='center' alignItems='center'>
                    {props.teamMembers.map(member => <TeamList teamMember={member}/>)}
                </Grid>
            </Container>
        </>
    )
}

export default Team