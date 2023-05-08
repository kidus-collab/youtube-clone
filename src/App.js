import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// MUI
import { Box } from "@mui/material";

//Components
import {
  NavBar,
  VideoDetail,
  Feed,
  SearchFeed,
  ChannelDetail,
} from "./Components/export";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "black" }}>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route exact path="/video/:id" element={<VideoDetail />} />
            <Route exact path="/channel/:id" element={<ChannelDetail />} />
            <Route exact path="/search/:id" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
