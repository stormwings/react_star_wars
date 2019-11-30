import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import Layout from "../Layout/Layout";
import ArticleList from "../../smart/ArticleList/ArticleList";
import Article from "../../smart/Article/Article";
import Animation from "../../dumb/Animation/Animation";
import CoverImage from "../../dumb/CoverImage/CoverImage";

import * as actions from "../../../redux/actions/charactersActions";

const styles = {
  root: {
    height: "50vh",
    padding: "0 5px"
  },
  toolbar: { marginTop: "70px" },
  content: { flexGrow: 1 }
};

interface IProps {
  actions: any;
  state: any;
  classes: any;
}

class Character extends Component<IProps> {
  componentDidMount() {
    this.props.actions.characterListFetch();
  }
  componentWillUnmount() {
    this.props.actions.characterUnmount();
  }

  fetchCharacter = (url: string) => {
    this.props.actions.characterFetch(url);
  };

  fetchMoreCharacters = (url: string) => {
    this.props.actions.addCharacterToListFetch(url);
  };

  onSearchSubmit = (formData: any) => {
    const { search } = formData;
    this.props.actions.characterListFetch(search);
  };

  render() {
    const { classes } = this.props;
    const {
      characters,
      character,
      loading,
      nextPage,
      error
    } = this.props.state;

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

    if (loading && !characters) {
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
                {characters && (
                  <ArticleList
                    characters={characters}
                    fetchMoreCharacters={this.fetchMoreCharacters}
                    onSelectCharacter={this.fetchCharacter}
                    onSearch={this.onSearchSubmit}
                    nextPageToFetch={nextPage}
                  />
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                {!character && loading && <Animation animation={"bb8"} />}
                {!character && !loading && <CoverImage />}
                {character && <Article character={character} />}
              </Grid>
            </Grid>
          </div>
        </main>
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => ({ state: state.characters });
const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

const CharacterWithStyles = withStyles(styles)(Character);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterWithStyles);
