import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import GroupList from "../teams/GroupList";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography'

import {useForm} from "../../hooks/useForm";
import MenuItem from "@material-ui/core/MenuItem";

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
    },
    menu : {
        width: 200
    }
}));

function AddMemberToGroups(props) {
    console.log(props);
    const [formValues, handleChange, handleSubmit, updateMember] = useForm({
        name: '',
        role: '',
        email: '',
        groups: []
    }, submit);
    const [groups, setGroups] = useState(formValues.groups);
    useEffect(() => {
        if (props.match.params.id) {
            updateMember(props.members[Number(props.match.params.id)]);
        }
    }, [props.match.params.id]);
    useEffect(()=> {
        setGroups(formValues.groups);
    },[formValues])

    function submit() {
        const updatedMember = {...formValues, groups}
        console.log(updatedMember);
        const updatedMemberList = props.members.map(member => {
            if (member.id.toString() === props.match.params.id) {
                return updatedMember
            } else {
                return member
            }
        })
        props.addTeam(updatedMemberList);
        props.history.push('/');
    }

    function addGroup(e) {
        setGroups([...groups, e.target.value]);
    }

    const classes = useStyles();
    return <Container component='section' maxWidth='sm'>
        <div className={classes.paper}>
            <Typography component='h1' variant='h5' className={classes.title}>
                Manage Member Groups
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form}>
                <TextField select label='Groups' fullWidth values={props.teamList} onChange={addGroup} SelectProps={{MenuProps: { className: classes.menu}}}>
                    {props.teamList.map(group => <MenuItem key={group.id} value={group}>{group.team}</MenuItem>)}
                </TextField>
                <Button type='submit' fullWidth variant='contained' color='primary'
                        className={classes.submit}>Submit</Button>
            </form>
        </div>
        <List>
            {groups.map(group => <GroupList group={group}/>)}
        </List>
    </Container>
}

export default AddMemberToGroups;