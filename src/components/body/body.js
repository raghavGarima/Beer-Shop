import React, { useEffect, useState } from "react";
import { useHome } from "../../commonContext/homeContext";
import { Box, Grid } from "@mui/material";
import { CardComponent } from "../card";
import noDataIMg from "../../no-datadownload.png";
export const BodyComponent = () => {
  const { favData } = useHome();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    debugger;
    if (favData.length !== 0) {
      setAllData([...favData]);
    }
  }, [favData]);
  const handleFav = () => {
    console.log("dfghjk");
  };
  return (
    <Box sx={{ flexGrow: 1, margin: "5rem 20px 20px 20px" }}>
      <Grid container spacing={5}>
        {allData.length > 0 ? (
          allData.map((item) => {
            return (
              <Grid item xs={12} md={3} key={item.id}>
                <CardComponent
                  item={item}
                  check={item.isFav}
                  handleFav={handleFav()}
                />
              </Grid>
            );
          })
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "90vh",
            }}
          >
            <img src={noDataIMg} />
            <h3>No Data Found</h3>
          </Box>
        )}
      </Grid>
    </Box>
  );
};
