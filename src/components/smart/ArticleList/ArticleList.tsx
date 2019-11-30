import React, { Fragment } from "react";
import useForm from "react-hook-form";
import { List, Paper, Grid } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import CharacterRow from "../../dumb/CharacterRow/CharacterRow";
import SearchInput from "../../dumb/SearchInput/SearchInput";
import LoadingTrigger from "../LoadingTrigger/LoadingTrigger";

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      maxHeight: "36vh",
      overflow: "auto",
      boxShadow: "none"
    }
  })
);

export default function ArticleList(props: any) {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const {
    characters,
    onSearch,
    onSelectCharacter,
    nextPageToFetch,
    fetchMoreCharacters
  } = props;
  const addCharacterToList = () => fetchMoreCharacters(nextPageToFetch);

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12}>
          <SearchInput
            inputAction={onSearch}
            handleSubmit={handleSubmit}
            inputRef={register}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Paper className={classes.paper}>
            <List component="nav" aria-label="main mailbox folders">
              {characters.map((character: any, i: number) => (
                <CharacterRow
                  key={i}
                  character={character}
                  onCharacterSelect={onSelectCharacter}
                />
              ))}
              {characters.length >= 10 && nextPageToFetch && (
                <LoadingTrigger triggerAction={addCharacterToList} />
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}
