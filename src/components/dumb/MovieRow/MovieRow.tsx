import React from "react";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";

export default function MovieRow(props: any) {
  const {
    onMovieSelect,
    movie: { title, url }
  } = props;
  return (
    <ListItem button onClick={() => onMovieSelect(url)}>
      <ListItemIcon>
        <MovieFilterIcon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
}
