import axios from "axios";
import { api_url } from "../constant/constant";
export default ({
  headers,
  method = "GET",
  url,
  data,
  params,
  baseURL = api_url
}) => {
  console.log("url:", api_url + url);
  return axios({
    headers,
    method,
    url,
    data,
    params,
    baseURL
  });
};
