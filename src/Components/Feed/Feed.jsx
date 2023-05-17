import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

//components
import { SideBar, Videos } from "../export";
//import { categories } from "../../utils/constants";
import { fetchApi } from "../../utils/API/FetchFromAPI";

const Feed = () => {
  const [selectedCategory, setCategory] = useState("");
  const [videoData, setVideo] = useState([]);

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideo(data?.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sm: "auto", md: "92vh" },
          borderRight: "2px solid #3d3d3d",
          px: { sm: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setCategory={setCategory}
        />
        <Typography
          className="copright"
          variant="body2"
          sx={{ mt: 1.5, color: "white" }}
        >
          CopyRight 2023 Kidus Getachew
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h4"
          p={3}
          sx={{ fontWeight: "bold", fontSize: "40px", color: "White" }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}> videos</span>
        </Typography>
        <Videos videoList={videoData} />
      </Box>
    </Stack>
  );
};

export default Feed;
