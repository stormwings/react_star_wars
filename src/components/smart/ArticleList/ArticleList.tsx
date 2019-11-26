import React, { Fragment } from 'react';
import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useForm from 'react-hook-form';
import { List, Paper, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { addCharacterToListFetch } from '../../../redux/actions/charactersActions';
import CharacterRow from '../../dumb/CharacterRow/CharacterRow';
import SearchInput from '../../dumb/SearchInput/SearchInput';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      maxHeight: '255px',
      overflow: 'auto',
      boxShadow: 'none'
    }
  })
);

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
  const { register, handleSubmit } = useForm();
  const { characters, onSearch, onSelectCharacter, nextPageToFetch } = props;

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12}>
          <SearchInput inputAction={onSearch} handleSubmit={handleSubmit} inputRef={register} />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Paper className={classes.paper}>
            <List component="nav" aria-label="main mailbox folders">
              {characters.map((character: any, i: number) => (
                <CharacterRow key={i} character={character} onCharacterSelect={onSelectCharacter} />
              ))}
              {characters.length >= 10 && <LoadingTrigger urlToFetch={nextPageToFetch} />}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}
