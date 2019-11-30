import React, { Fragment, useState } from "react";
import { List, Paper, Grid } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import MovieRow from "../../dumb/MovieRow/MovieRow";

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      maxHeight: "36vh",
      overflow: "auto",
      boxShadow: "none"
    }
  })
);

// export const useSearchArticles = (articles: any) => {
//   const [query, setQuery] = useState("");
//   const [filteredArticles, setFilteredArticles] = useState(articles);

//   useMemo(() => {
//     const result = articles.filter((article: any) => {
//       return `${article.firstName} ${article.lastName}`
//         .toLowerCase()
//         .includes(query.toLowerCase());
//     });

//     setFilteredArticles(result);
//   }, [articles, query]);

//   return [query, setQuery, filteredArticles];
// };

export const useFilterArticles = (initialArticles: any) => {
  const [articleList, filterArticles] = useState(initialArticles);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    const filteredArticles = initialArticles.filter((article: any) => {
      const searchValue = article.title.toLowerCase();
      const searchResult = searchValue.indexOf(query) !== -1;
      return searchResult;
    });

    filterArticles(filteredArticles);
  };

  return [onChange, articleList];
};

export default function MovieList({ movies, onSelectMovie }: any) {
  const classes = useStyles();
  const [onChange, articleList] = useFilterArticles(movies);

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12}>
          <div style={{ backgroundColor: "white", height: "8vh" }}>
            <TextField
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
              name="search"
              id="standard-full-width"
              label="Search Movie"
              style={{ margin: 8, width: "97%" }}
              placeholder="Revenge of the Sith"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Paper className={classes.paper}>
            <List component="nav" aria-label="main mailbox folders">
              {articleList.map((movie: any, i: number) => (
                <MovieRow key={i} movie={movie} onMovieSelect={onSelectMovie} />
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}
