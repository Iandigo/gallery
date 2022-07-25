import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Modal,
  CardHeader,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },

  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
}));

const Post = ({ handleDelete, img, title }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          onClick={handleOpen}
          className={classes.media}
          image={img}
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Learn More
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card className={classes.modal}>
            <CardHeader title={title} subheader="September 14, 2016" />
            <CardMedia component="img" image={img} />
            <CardContent>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam consectetur earum est.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary" onClick={handleDelete}>
                DELETE
              </Button>
            </CardActions>
          </Card>
        </Modal>
      </CardActions>
    </Card>
  );
};

export default Post;
