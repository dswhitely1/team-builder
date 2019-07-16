import React from 'react';
import {useForm} from "../../hooks/useForm";
import {makeStyles} from '@material-ui/core/styles'
import Container from "@material-ui/core/Container";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import GroupList from "../teams/GroupList";
import List from "@material-ui/core/List";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        marginTop: theme.spacing(1)
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

function AddTeamListForm(props) {
    const classes = useStyles();
    const [formValues, handleChange, handleSubmit, updateGroupList] = useForm({
        team: ''
    }, submit);

    function submit() {
        const id = props.teamList.length === 0 ? 0 : props.teamList[props.teamList.length - 1].id + 1;
        const updatedTeamList = {id, ...formValues}
        console.log(`ID: ${id}, GROUP: ${updatedTeamList}`)
        props.updateTeamList([...props.teamList, updatedTeamList]);
    }

    console.log(props);
    return (
        <Container component='section' maxWidth='sm'>
            <div className={classes.paper}>
                <Typography component='h1' variant='h5' className={classes.title}>
                    Manage Groups
                </Typography>

                <form onSubmit={handleSubmit} className={classes.form}>
                    <TextField variant='outlined' margin='normal' type='text' required fullWidth id='team'
                               value={formValues.team} label='Group Name' onChange={handleChange} name='team'
                               autoFocus/>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Submit</Button>
                </form>
            </div>
            <List>
            {props.teamList.map(group => <GroupList group={group}/>)}
            </List>
        </Container>
    )
}

export default AddTeamListForm;