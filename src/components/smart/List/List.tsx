import React from 'react';
import { List, ListItemIcon, ListItemText, Paper } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      maxHeight: '255px',
      overflow: 'auto',
      boxShadow: 'none'
    }
  })
);

const Character = (props: any) => {
  const {
    onCharacterSelect,
    character: { name, url }
  } = props;
  return (
    <ListItem button onClick={() => onCharacterSelect(url)}>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default function ArticleList(props: any) {
  const classes = useStyles();
  const { characters, onSelectCharacter } = props;

  return (
    <Paper className={classes.paper}>
      <List component="nav" aria-label="main mailbox folders">
        {characters.map((character: any, i: number) => (
          <Character key={i} character={character} onCharacterSelect={onSelectCharacter} />
        ))}
      </List>
    </Paper>
  );
}
