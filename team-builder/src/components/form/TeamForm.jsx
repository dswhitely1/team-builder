import React, {useEffect} from 'react';
import {useForm} from '../../hooks/useForm';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        marginTop: theme.spacing(1),
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        magin: theme.spacing(3, 0, 2)
    }
}));


const TeamForm = props => {
    const classes = useStyles();
    const [formValues, handleChange, handleSubmit, updateTeamMember] = useForm({
        name: '',
        role: '',
        email: '',
    }, submit);
    console.log(props);
    useEffect(() => {
        console.log(props.members);
        if (props.edit) {
            console.log(props.members[Number(props.match.params.id)]);
            updateTeamMember(props.members[Number(props.match.params.id)]);
        }
    }, [props.members]);


    function submit() {
        if (props.edit) {
            updateATeamMember();
        } else {
            addTeamMember();
        }
    }

    function updateATeamMember() {
        const updateTeamMemberProfile = props.members.map(member => {
            if (member.id.toString() === props.match.params.id) {
                return formValues
            } else {
                return member;
            }
        })

        props.addTeam(updateTeamMemberProfile);
        props.history.push('/');
    }

    function addTeamMember() {
        const id = props.members.length === 0 ? 0 : props.members[props.members.length - 1].id + 1;
        const updatedFormNumbers = {id, ...formValues};
        props.addTeam([...props.members, updatedFormNumbers]);
        props.history.push('/');
    }

    console.log(formValues);


    return (
        <Container component='section' maxWidth='sm'>
            <div className={classes.paper}>
                <Typography component='h1' variant='h5' className={classes.title}>
                    {props.edit ? `Edit Team Member` : `Add New Team Member`}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField variant='outlined' margin='normal' type='text' required fullWidth id='name' label='Name'
                               onChange={handleChange} value={formValues.name} name='name' autoFocus/>
                    <TextField variant='outlined' margin='normal' type='email' required fullWidth id='email' label='Email Address'
                               onChange={handleChange} value={formValues.email} name='email'/>
                    <TextField variant='outlined' margin='normal' type='text' required fullWidth id='role' label='Current Role'
                               onChange={handleChange} value={formValues.role} name='role'/>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Submit</Button>
                </form>
            </div>
        </Container>
    )

};

export default TeamForm;