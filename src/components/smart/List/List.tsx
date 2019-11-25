import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { List, ListItemIcon, ListItemText, Paper } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch } from 'react-redux';
import { addCharacterToListFetch } from '../../../redux/actions/charactersActions';

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

// hook to define if the component its visible
const useCheckElementInViewport = () => {
  const $element: any = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    var observer = new IntersectionObserver(entries => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        // observer.disconnect(); // disabled for lazy load
      }
    });
    observer.observe($element.current);
  }, [$element]);

  return [show, setShow, $element];
};

const LoadingTrigger = ({ urlToFetch }: any) => {
  const [show, setShow, $element] = useCheckElementInViewport();
  const dispatch = useDispatch();

  useEffect(() => {
    if (show === true) {
      dispatch(addCharacterToListFetch(urlToFetch));
      setShow(false);
    }
  });

  return <p ref={$element}>Loading...</p>;
};

export default function ArticleList(props: any) {
  const classes = useStyles();
  const { characters, onSelectCharacter, nextPageToFetch } = props;

  return (
    <Paper className={classes.paper}>
      <List component="nav" aria-label="main mailbox folders">
        {characters.map((character: any, i: number) => (
          <Character key={i} character={character} onCharacterSelect={onSelectCharacter} />
        ))}
        <LoadingTrigger urlToFetch={nextPageToFetch} />
      </List>
    </Paper>
  );
}
