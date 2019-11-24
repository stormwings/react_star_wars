import React from 'react';
import { List, ListItemIcon, ListItemText, Card, CardContent, Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import PersonIcon from '@material-ui/icons/Person';
import Layout from '../Layout/Layout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '500px',
      margin: '10px'
      // flexGrow: 1
    },
    middle: {
      marginTop: '10px',
      // width: '49%',
      backgroundColor: theme.palette.background.paper
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1
    },
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
    title: {
      fontSize: 14
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

export default function Character() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>• </span>;

  return (
    <Layout>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6}>
              <Paper className={classes.paper}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
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
            </Grid>
          </Grid>
        </div>
      </main>
    </Layout>
  );
}
