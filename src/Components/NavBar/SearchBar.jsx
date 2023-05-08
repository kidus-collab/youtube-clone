//import React, { useState } from "react";
//import { useNavigate } from "react-router";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: { sm: 5, md: 10 },
        mt: 1,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="search..."
        value=""
        onChange={() => {}}
        style={{
          alignItems: "start",
          fontSize: "20px",
          border: "none",
          marginLeft: { sm: "0px", md: "-20px" },
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
