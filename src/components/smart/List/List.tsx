import React from 'react';
import { List, ListItemIcon, ListItemText, Paper } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      maxHeight: '255px',
      overflow: 'auto',
      boxShadow: 'none'
    }
  })
);

export default function ArticleList() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Character" />
        </ListItem>
      </List>
    </Paper>
  );
}
