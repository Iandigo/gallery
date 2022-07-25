import { Container, makeStyles, InputBase, alpha } from "@material-ui/core";
import feeds from "../data/feed";
import Post from "./Post";
import { Search } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    color: "black",
    marginLeft: theme.spacing(1),
  },
}));

const Feed = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const classes = useStyles();
  const handleDelete = (id) => {
    return feeds.filter((feed) => feed.id !== id);
  };
  return (
    <Container className={classes.container}>
      <div className={classes.search}>
        <Search />
        <InputBase
          placeholder="Search..."
          className={classes.input}
          onChange={(event) => {
            setSearchTerm(event.target.value.toLowerCase());
          }}
        />
      </div>
      <div>
        {feeds
          .filter((feed) => {
            if (searchTerm == "") {
              return feed;
            }
            if (feed.title.toLocaleLowerCase().includes(searchTerm)) {
              return feed;
            }
          })
          .map((feed, id) => {
            return (
              <Post
                id={id}
                title={feed.title}
                img={feed.img}
                handleDelelte={() => handleDelete(id)}
              />
            );
          })}
      </div>
    </Container>
  );
};

export default Feed;
