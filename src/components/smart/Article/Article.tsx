import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Paper } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

const useStyles = makeStyles(() =>
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

const Bull = (props: any) => <span className={props.className}>• </span>;

const DetailRow = (props: any) => {
  const { className, color, variant, component, title, detail } = props;
  return (
    <Typography
      className={className ? className : undefined}
      color={color ? color : undefined}
      variant={variant ? variant : undefined}
      component={component ? component : undefined}
    >
      {title}: {detail ? detail : ''}
    </Typography>
  );
};

const Film = ({ url, classBullet }: any) => {
  const [film, setFilm] = useState('') as any;
  const history = useHistory();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setFilm(res));
  });

  if (!film) return <i></i>;

  return (
    // redirect to movie
    <i
      style={{ cursor: 'pointer' }}
      onClick={() =>
        history.push({
          pathname: '/movie',
          state: {
            film
          }
        })
      }
    >
      <Bull className={classBullet} /> {film.title} <br />
    </i>
  );
};

const DetailList = (props: any) => {
  const { className, classBullet, variant, component, films } = props;

  return (
    <Typography className={className} variant={variant} component={component}>
      {films.map((filmUrl: any, j: number) => {
        return <Film className={classBullet} key={j} url={filmUrl} />;
      })}
    </Typography>
  );
};

export default function Article(props: any) {
  const classes = useStyles();
  const { eye_color, height, mass, name, films } = props.character;

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card}>
        <CardContent>
          <DetailRow title={'Nombre'} detail={name} variant={'h5'} component={'h2'} />
          <br />
          <DetailRow title={'Color de ojos'} detail={eye_color} className={classes.pos} color={'textSecondary'} />
          <DetailRow title={'Altura'} detail={height} className={classes.pos} color={'textSecondary'} />
          <DetailRow title={'Peso'} detail={mass} className={classes.pos} color={'textSecondary'} />
          <DetailRow title={'Peliculas en las que apareció'} className={classes.pos} color={'textSecondary'} />
          <DetailList
            films={films}
            className={classes.selectable}
            classBullet={classes.bullet}
            color={'textSecondary'}
            variant="body2"
            component="p"
          />
        </CardContent>
      </Card>
    </Paper>
  );
}
