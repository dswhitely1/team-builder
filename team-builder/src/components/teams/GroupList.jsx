import React from 'react';
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
                    <IconButton edge='end' aria-label='Edit'>
                        <Edit/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
        </>
    )
}

export default GroupList;