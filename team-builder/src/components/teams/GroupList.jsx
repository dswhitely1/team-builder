import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Divider from "@material-ui/core/Divider";

function GroupList(props) {
    return (
        <>
            <ListItem>
                <ListItemText>
                    {props.group.team}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton edge='end' aria-label='Edit' component={RouterLink} to={`/edit-team/${props.group.id}`}>
                        <Edit />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
        </>
    )
}

export default GroupList;