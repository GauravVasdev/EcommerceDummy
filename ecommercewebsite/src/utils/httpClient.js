import axios from "axios";

import config from "./config";

const http = (headers, anonymous) => {
  return axios.create({
    baseURL: config.BASE_API_URL,

    timeout: config.TIMEOUT,

    headers: {
      ...headers,
    },
  });
};

export default http;
