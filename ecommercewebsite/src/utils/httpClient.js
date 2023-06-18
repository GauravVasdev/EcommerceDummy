import axios from "axios";

import { config, cardConfig } from "./config";

export const http = (headers, anonymous) => {
  const token = localStorage.getItem('token');
  console.log("Token in http : ",token);
  const defaultHeader = {
    Authorization : `Bearer ${token}`  
  }
  return axios.create({
    baseURL: config.BASE_API_URL,

    timeout: config.TIMEOUT,

    headers: {
      ...defaultHeader,
      ...headers,
    },
  });
};

export const cardHttp = (headers, anonymous) => {
  const token = localStorage.getItem('token');
  console.log("Token in http : ",token);
  const defaultHeader = {
    Authorization : `Bearer ${token}`  
  }
  return axios.create({
    baseURL: cardConfig.BASE_API_URL,

    timeout: cardConfig.TIMEOUT,

    headers: {
      ...defaultHeader,
      ...headers,
    },
  });
};

