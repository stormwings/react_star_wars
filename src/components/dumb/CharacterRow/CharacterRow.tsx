import React from 'react';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import PersonIcon from '@material-ui/icons/Person';

export default function CharacterRow(props: any) {
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
}
