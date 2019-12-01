import React, { useState, useEffect, Fragment } from "react";
import { Card, CardContent, Typography, Paper } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() =>
  createStyles({
    selectable: {
      color: "#3F51B5",
      fontWeight: 600
    },
    card: {
      minWidth: "50vh",
      height: "50vh",
      boxShadow: "none"
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    pos: {
      marginBottom: 12
    },
    paper: {
      maxHeight: "45vh",
      overflow: "auto",
      boxShadow: "none"
    }
  })
);

const Bull = (props: any) => <span className={props.className}>• </span>;

const DetailRow = (props: any) => {
  const {
    className,
    color,
    variant,
    component,
    title,
    detail,
    textColor
  } = props;
  return (
    <Typography
      className={className ? className : undefined}
      color={color ? color : undefined}
      variant={variant ? variant : undefined}
      component={component ? component : undefined}
      style={{ color: textColor ? textColor : "" }}
    >
      {title}: {detail ? detail : ""}
    </Typography>
  );
};

const Article = ({ url, classBullet }: any) => {
  const [article, setArticle] = useState("");

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setArticle(res.name));
  });

  if (!article) return <CircularProgress style={{ margin: "10px" }} />;

  return (
    <i style={{ cursor: "pointer" }} onClick={() => console.log(article)}>
      <Bull className={classBullet} /> {article}
    </i>
  );
};

const DetailList = (props: any) => {
  const { title, className, classBullet, variant, component, articles } = props;

  return (
    <Fragment>
      <Typography style={{ margin: "5px", fontWeight: "bolder" }}>
        {title}
      </Typography>
      <Typography className={className} variant={variant} component={component}>
        {articles.map((articleUrl: any, j: number) => {
          return <Article classBullet={classBullet} key={j} url={articleUrl} />;
        })}
      </Typography>
    </Fragment>
  );
};

export default function MovieDetail(props: any) {
  const classes = useStyles();
  const {
    title,
    opening_crawl,
    director,
    producer,
    release_date,
    planets
  } = props.movie;

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card}>
        <CardContent>
          <DetailRow
            title={"Nombre"}
            detail={title}
            variant={"h5"}
            component={"h2"}
          />
          <br />
          <DetailRow
            title={"Director"}
            detail={director}
            className={classes.pos}
            color={"textSecondary"}
          />
          <DetailRow
            title={"Productor"}
            detail={producer}
            className={classes.pos}
            color={"textSecondary"}
          />
          <DetailRow
            title={"Estreno"}
            detail={release_date}
            className={classes.pos}
            color={"textSecondary"}
          />
          {/* <DetailRow
            title={"Opening"}
            detail={opening_crawl}
            className={classes.pos}
            color={"textSecondary"}
            textColor={"black"}
          /> */}
          <DetailList
            title={"Planetas"}
            articles={planets}
            className={classes.selectable}
            classBullet={classes.bullet}
            color={"textSecondary"}
            variant="body2"
            component="p"
          />
        </CardContent>
      </Card>
    </Paper>
  );
}
