import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

const useFetch = () => {
  let config = {};
  let {authTokens, setAuthTokens, setUser} = useContext(AuthContext);
  let baseURL = "http://127.0.0.1:8000/";

  let originalRequest = async (url, config) => {
    url = `${baseURL}${url}`;
    let response = await fetch(url, config);
    if (config['method'] !== 'DELETE'){
      let data = await response.json();
      return { response, data };
    }
    else{
      return {response}
    }
  };

  let refreshToken = async (authTokens) => {
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens.refresh }),
    });
    let data = await response.json();
    localStorage.setItem("authTokens", JSON.stringify(data));
    setAuthTokens(data);
    setUser(jwtDecode(data.access));
    return data;
  };

  let callFetch = async (url, method = "GET", requestData = null) => {
    const user = jwtDecode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (isExpired) {
      authTokens = await refreshToken(authTokens);
    }

    config["headers"] = {
      Authorization: `Bearer ${authTokens?.access}`,
    };
    config["method"] = method;

    if (method === "POST" || method === "PUT") {
      config["headers"]["Content-Type"] = "application/json";
      config["body"] = requestData;
    }

    let { response, data } = await originalRequest(url, config);
    return { response, data };
  };

  return callFetch;
};

export default useFetch;
