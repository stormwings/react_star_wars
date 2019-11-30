import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import Layout from "../Layout/Layout";
import MovieList from "../../smart/MovieList/MovieList";
import MovieDetail from "../../smart/MovieDetail/MovieDetail";
import CoverImage from "../../dumb/CoverImage/CoverImage";
import Animation from "../../dumb/Animation/Animation";

import * as actions from "../../../redux/actions/moviesActions";

const styles = {
  root: { height: "50vh", padding: "0 5px" },
  toolbar: { marginTop: "70px" },
  content: { flexGrow: 1 }
};

interface IProps {
  actions: any;
  state: any;
  classes: any;
  location: any;
}

class Movie extends Component<IProps> {
  componentDidMount() {
    // fetch movie from redirect
    const { state } = this.props.location;
    if (state) {
      const { url } = state.film;
      this.fetchMovie(url);
    }
    // fetch all movies list
    this.props.actions.movieListFetch();
  }
  componentWillUnmount() {
    this.props.actions.movieUnmount();
  }

  fetchMovie = (url: string) => {
    this.props.actions.movieFetch(url);
  };

  render() {
    const { classes } = this.props;
    const { movies, movie, loading, error } = this.props.state;

    if (error) {
      return (
        <Layout>
          <Animation
            animation={"500"}
            style={{ marginTop: "30px", width: "100%" }}
          />
        </Layout>
      );
    }

    if (loading && !movies) {
      return (
        <Layout>
          <Animation
            animation={"bb8"}
            style={{ marginTop: "30px", width: "100%" }}
          />
        </Layout>
      );
    }

    return (
      <Layout>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6}>
                {movies && (
                  <MovieList movies={movies} onSelectMovie={this.fetchMovie} />
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                {!movie && loading && <Animation animation={"bb8"} />}
                {!movie && !loading && <CoverImage />}
                {movie && <MovieDetail movie={movie} />}
              </Grid>
            </Grid>
          </div>
        </main>
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => ({ state: state.movies });
const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

const MovieWithStyles = withStyles(styles)(Movie);
export default connect(mapStateToProps, mapDispatchToProps)(MovieWithStyles);
