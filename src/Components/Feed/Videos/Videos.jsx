import React from "react";
import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "../../export";

const Videos = ({ videoList }) => {
  console.log(videoList);
  return (
    <Stack direction="row" flexWrap="wrap" gap={2} justifyItems="start">
      {videoList.map((item) => (
        <Box>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
