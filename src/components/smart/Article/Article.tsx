import React from 'react';
import { Card, CardContent, Typography, Paper } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectable: {
      color: '#3F51B5',
      fontWeight: 600
    },
    card: {
      minWidth: 275,
      maxHeight: 500,
      boxShadow: 'none'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    pos: {
      marginBottom: 12
    },
    paper: {
      maxHeight: '255px',
      overflow: 'auto',
      boxShadow: 'none'
    }
  })
);

export default function Article() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>• </span>;

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Nombre: C3PO
          </Typography>
          <br />
          <Typography className={classes.pos} color="textSecondary">
            Color de ojos: Amarillo
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Altura: 167 cm
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Peso: 75 kg
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Peliculas en las que apareció:
          </Typography>
          <Typography className={classes.selectable} variant="body2" component="p">
            {bull} A New Hope
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}
