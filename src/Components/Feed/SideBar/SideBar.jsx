import React from "react";
import { Stack } from "@mui/material";

import "./categorybtn.css";
//utils
import { categories } from "../../../utils/constants";

const SideBar = ({ selectedCategory, setCategory }) => {
  return (
    <Stack
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "92vh" },
        flexDirection: { sm: "row", md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => {
            return setCategory(category.name);
          }}
          style={{
            borderRadius: 20,
            alignItems: "baseline",
            marginTop: "10px",
            background: category.name === selectedCategory && "red",
          }}
        >
          <span
            className="category-icon"
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              fontWeight: "800",
            }}
          >
            {category.icon}
          </span>
          <span
            className="category-name"
            style={{ fontSize: "15px", fontWeight: "900" }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
