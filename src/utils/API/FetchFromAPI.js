import axios from "axios";

const URL = "https://youtube138.p.rapidapi.com/";

const options = {
  url: URL,
  params: {
    relatedToVideoId: "7ghhRHRP6t4",
    part: "id,snippet",
    type: "video",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "ae2df42f95msh9a124e7f77551fap199809jsn72d3fe9b27b6",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

try {
  const response = async () => {
    return axios.request(options);
  };
  console.log(response.data);
} catch (error) {
  console.error(error);
}

export async function fetchApi(url) {
  const { data } = await axios.get(`${URL}/${url}`, options);
}
