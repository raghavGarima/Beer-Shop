import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import "./main.css";
export const CardDetailComponent = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    getCardDetail();
  }, []);
  const getCardDetail = () => {
    debugger;
    console.log("ewqew", id);
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "qwertyuiirewq qwertyuio");
        setData([...data]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box sx={{ flexGrow: 1, margin: "5rem 30px 20px 30px" }}>
      <Grid container style={{ marginTop: "8rem" }}>
        {data.length !== 0 && (
          <>
            <Grid item xs={12} md={4} className="card-detail-image-div">
              <Box sx={{ height: "16rem" }}>
                <img
                  src={data[0].image_url}
                  alt="image"
                  className="card-image"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box>
                <h1 style={{ textDecoration: "underline" }}> {data[0].name}</h1>
                <p> Tagline : {data[0].tagline} </p>
                <p> Contributed By : {data[0].contributed_by}</p>
                <p> Description : {data[0].description} </p>
                <p> First Brewed in : {data[0].first_brewed} </p>
                <p>
                  {" "}
                  Volume : {data[0].volume.value} {data[0].volume.unit}{" "}
                </p>
                <p> Food Pairing : {data[0].food_pairing}</p>
                <p> Brewers Tips : {data[0].brewers_tips}</p>
                <p> Abv : {data[0].abv}</p>
                <p> Ph : {data[0].ph}</p>
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};
