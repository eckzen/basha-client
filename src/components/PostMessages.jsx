import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  withStyles,
  Typography,
} from "@material-ui/core";
import PostMessageForm from "./PostMessageForm";
import * as actions from "../actions/PostMessage.actions";

const styles = (theme) => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
});

const PostMessages = ({ classes }) => {
  const postMessage = useSelector((state) => state.postMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchAll());
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <PostMessageForm />
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          <List>
            {postMessage.list.map((record, index) => {
              return (
                <Fragment key={index}>
                  <ListItem>
                    <ListItemText>
                      <Typography variant="h5">{record.title}</Typography>
                      <div>{record.message}</div>
                    </ListItemText>
                  </ListItem>
                </Fragment>
              );
            })}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(PostMessages);
