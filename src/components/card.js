import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions,
} from "@mui/material";
import "./main.css";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export function CardComponent({ item, check, handleFav }) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(check);
  }, [check]);
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <Box sx={{ height: "13rem" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          image={item.image_url}
        />
      </Box>
      <CardContent sx={{ paddingBottom: "0px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="card-heading"
        >
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.tagline}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          First Brewed in: {item.first_brewed}
        </Typography>
        Volume :{item.volume.value} {item.volume.unit}
      </CardContent>
      <CardActions sx={{ justifyContent: "end" }}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => navigate(`/card-detail/${item.id}`)}
        >
          Show More Details
        </Button>
        {item.isFav == "false" ? (
          <FavoriteBorderIcon
            style={{ color: "red", width: "5rem" }}
            onClick={() => {
              handleFav(item, item.id);
            }}
          />
        ) : (
          <FavoriteIcon
            style={{ color: "red", width: "5rem" }}
            onClick={() => {
              handleFav(item, item.id);
            }}
          />
        )}
      </CardActions>
    </Card>
  );
}
