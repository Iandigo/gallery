import { Container, makeStyles } from "@material-ui/core";
import feeds from "../data/feed";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  const handleDelete = (id) => {
    return feeds.filter((feed) => feed.id !== id);
  };
  return (
    <Container className={classes.container}>
      {feeds.map((feed, id) => {
        return (
          <Post
            id={id}
            title={feed.title}
            img={feed.img}
            handleDelelte={() => handleDelete(id)}
          />
        );
      })}
    </Container>
  );
};

export default Feed;
