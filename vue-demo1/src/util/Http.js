import axios from "axios";
import cookie from "js-cookie";

axios.defaults.baseURL = "https://www.fastmock.site/mock/bd0376f82855bb2cc8c20ede282b2ade/";
export const post = (url, options) => {
  const defaultOptions = {
    credentials: "include",
    method: "post",
    url
  };
  const newOptions = { ...defaultOptions, ...options };
  if (!(newOptions.data instanceof FormData)) {
    newOptions.headers = {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      ...newOptions.headers
    };
    newOptions.data = JSON.stringify(newOptions.data);
  } else {
    // newOptions.body is FormData
    newOptions.headers = {
      Accept: "application/json",
      "X-Beancomm-UserId": userInfo.user_id,
      "X-Beancomm-Token": userInfo.token,
      ...newOptions.headers
    };
  }
  return axios(newOptions)
    .then(data => {
      return data.data
    })
    .catch(e => e);
};
