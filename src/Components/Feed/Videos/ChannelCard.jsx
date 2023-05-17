import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";

import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../../../utils/constants";

const ChannelCard = () => {
  return (
    <Box>
      sx ={" "}
      {{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "356px", md: "320px" },
        margin: "auto",
      }}
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            mb={2}
            sx={{ borderRadius: "50%", height: "180px", width: "180px" }}
          />
        </CardContent>
        <Typography variant="h6" fontWeight="bold" sx={{ color: "#fff" }}>
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 15, color: "gray", ml: "5px" }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography variant="caption">
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}{" "}
            Subscribers
          </Typography>
        )}
      </Link>
    </Box>
  );
};

export default ChannelCard;
