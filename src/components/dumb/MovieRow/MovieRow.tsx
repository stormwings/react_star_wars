import React from 'react';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import PersonIcon from '@material-ui/icons/Person';

export default function MovieRow(props: any) {
  const {
    onMovieSelect,
    movie: { title, url }
  } = props;
  return (
    <ListItem button onClick={() => onMovieSelect(url)}>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
}
