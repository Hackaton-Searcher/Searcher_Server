import http from "http";

const httpRequest = (path: string, method: string) => {
  const options = {
    path,
    method,
  };

  http.request(options, (res) => {
    res.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });
};

export default httpRequest;
