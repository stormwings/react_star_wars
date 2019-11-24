import React from 'react';
import {
  Grid
  // CircularProgress
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Layout from '../Layout/Layout';
import ArticleList from '../../smart/List/List';
import Article from '../../smart/Article/Article';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '500px',
      margin: '10px'
    },
    // loader: {
    //   height: '255px',
    //   backgroundColor: '#FFF',
    //   position: 'relative'
    // },
    // loadingProgress: {
    //   top: '50%',
    //   position: 'absolute'
    // },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1
    }
  })
);

export default function Character() {
  const classes = useStyles();
  const dispatch = useDispatch();

  dispatch({ type: 'action', payload: { action: 'action' } });

  const movies = useSelector((state: any) => state.movies);
  const characters = useSelector((state: any) => state.characters);
  console.log({ movies, characters });

  return (
    <Layout>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {/* <div className={classes.loader}>
          <div className={classes.loadingProgress}>
            <Grid container>
              <Grid item xs={12} sm={12} md={6}>
                <CircularProgress />
              </Grid>
            </Grid>
          </div>
        </div> */}

        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6}>
              <ArticleList />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Article />
            </Grid>
          </Grid>
        </div>
      </main>
    </Layout>
  );
}
