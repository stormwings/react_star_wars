import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import Layout from '../Layout/Layout';
import MovieList from '../../smart/MovieList/MovieList';
// import MovieDetail from '../../smart/MovieDetail/MovieDetail';

import * as actions from '../../../redux/actions/moviesActions';

const styles = {
  root: { height: '500px', margin: '10px' },
  toolbar: { marginTop: '70px' },
  content: { flexGrow: 1 }
};

interface IProps {
  actions: any;
  state: any;
  classes: any;
}

class Movie extends Component<IProps> {
  componentDidMount() {
    this.props.actions.movieListFetch();
  }

  fetchMovie = (url: string) => {
    this.props.actions.movieFetch(url);
  };

  render() {
    const { classes } = this.props;
    const {
      movies,
      movie
      //  loading,
    } = this.props.state;

    return (
      <Layout>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6}>
                {/* {loading && <h1>Loading</h1>} */}
                {movies && <MovieList movies={movies} onSelectMovie={this.fetchMovie} />}
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                {/* {movie && <MovieDetail movie={movie} />} */}
              </Grid>
            </Grid>
          </div>
        </main>
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => ({ state: state.movies });
const mapDispatchToProps = (dispatch: Dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

const MovieWithStyles = withStyles(styles)(Movie);
export default connect(mapStateToProps, mapDispatchToProps)(MovieWithStyles);
