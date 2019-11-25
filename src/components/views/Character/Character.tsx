import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import Layout from '../Layout/Layout';
import ArticleList from '../../smart/List/List';
import Article from '../../smart/Article/Article';

import * as actions from '../../../redux/actions/charactersActions';

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

class Character extends Component<IProps> {
  componentDidMount() {
    this.props.actions.characterListFetch();
  }

  fetchCharacter = (url: string) => {
    this.props.actions.characterFetch(url);
  };

  render() {
    const { classes } = this.props;
    const {
      characters,
      character,
      //  loading,
      nextPage
    } = this.props.state;

    return (
      <Layout>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6}>
                {/* {loading && <h1>Loading</h1>} */}
                {characters && <ArticleList characters={characters} onSelectCharacter={this.fetchCharacter} nextPageToFetch={nextPage} />}
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                {/* {loading && <h1>Loading</h1>} */}
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
const mapDispatchToProps = (dispatch: Dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

const CharacterWithStyles = withStyles(styles)(Character);
export default connect(mapStateToProps, mapDispatchToProps)(CharacterWithStyles);
