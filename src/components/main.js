import React, { useEffect, useState } from "react";
import { Box, TextField, Grid, Button } from "@mui/material";
import "./main.css";
import { CardComponent } from "./card";
import SearchIcon from "@mui/icons-material/Search";
import { useHome } from "../commonContext/homeContext";
export function MAinComponent() {
  const [dataToShow, SetDataToShow] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const {
    completeData,
    setCompleteData,
    count,
    setCount,
    favData,
    setFavData,
  } = useHome();
  useEffect(() => {
    debugger;
    if (completeData.length == 0) {
      getData(count);
    } else {
      SetDataToShow([...completeData]);
    }
  }, []);
  useEffect(() => {
    if (searchInput == "") {
      // SetDataToShow([])
      setCount(1);
      SetDataToShow([...completeData]);
    }
  }, [searchInput]);
  window.onscroll = function () {
    console.log(count);
    if (getScrollTop() < getDocumentHeight() - window.innerHeight) return;

    getData(count + 1);
    setCount(count + 1);
  };

  const getScrollTop = () => {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  };

  const getDocumentHeight = () => {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  };
  const getData = (dataCount) => {
    setisLoading(true);
    fetch(`https://api.punkapi.com/v2/beers?page=${dataCount}&per_page=20`)
      .then((res) => res.json())
      .then((data) => {
        debugger;
        console.log(data, "qwertyuiirewq qwertyuio");
        data.forEach((ele) => {
          ele["isFav"] = "false";
        });
        if (dataCount == 1) {
          SetDataToShow([...data]);
          setCompleteData([...data]);
        } else {
          SetDataToShow([...dataToShow, ...data]);
          setCompleteData([...completeData, ...data]);
        }
        setisLoading(false);
      })
      .catch((err) => setisLoading(false));
  };
  const handleSearch = () => {
    setisLoading(true);
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchInput}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "qwertyuiirewq qwertyuio");
        SetDataToShow([...data]);
        setCount(1);
        setisLoading(false);
      })
      .catch((err) => setisLoading(false));
  };
  const handleFav = (item, item_Id) => {
    debugger;
    let dataArr = [...dataToShow];
    let check = item.isFav == "false" ? "true" : "false";
    if (item.isFav == "false") {
      item["isFav"] = check;
      setFavData([...favData, item]);
    } else {
      deleteFav(item);
    }
    dataArr.forEach((ele) => {
      if (ele.id == item_Id) {
        ele["isFav"] = check;
      }
    });
    SetDataToShow([...dataArr]);
  };

  const deleteFav = (data) => {
    let dataToMatch = data.id;
    let newArr = favData.filter((ele) => {
      if (ele.id !== dataToMatch) {
        return ele;
      }
    });
    if (newArr.length > 0) {
      setFavData([...newArr]);
    } else setFavData([]);
  };
  return (
    <Box sx={{ flexGrow: 1, margin: "5rem 20px 20px 20px" }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={12} className="card-detail-image-div">
          <TextField
            id="outlined-basic"
            label="Search By Beer Name"
            variant="outlined"
            size="small"
            style={{ width: "60%" }}
            value={searchInput}
            onChange={(event) => {
              if (event.target.value != " ") {
                setSearchInput(event.target.value);
              }
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              if (searchInput !== " " && searchInput !== "") handleSearch();
            }}
          >
            <SearchIcon />
            Search
          </Button>
        </Grid>
        {dataToShow.length > 0 ? (
          dataToShow.map((item) => {
            return (
              <Grid item xs={12} md={3} key={item.id}>
                <CardComponent
                  item={item}
                  check={item.isFav}
                  handleFav={handleFav}
                />
              </Grid>
            );
          })
        ) : (
          <Box>No Data Found</Box>
        )}
      </Grid>
      {isLoading ? (
        <Box sx={{ fontSize: "40px", textAlign: "center", width: "100%" }}>
          Loading ....
        </Box>
      ) : null}
    </Box>
  );
}
