import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

// reuse components
import { VideoCard, ChannelCard } from "../Components/export";
import { fetchApi } from "../utils/API/FetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetchApi(`channels?part="snippet&id=${id}`).then(
      (data) => setChannelDetail(data.items[0]),
      fetchApi(`search?channelId=${id}&part="snippet&order=data`).then((data) =>
        setVideo(data?.items)
      )
    );
  }, [id]);

  return <Box>{id}</Box>;
};

export default ChannelDetail;
