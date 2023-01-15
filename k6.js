import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    { duration: "5m", target: 60 },
    { duration: "2m", target: 10 },
    { duration: "2m", target: 100 },
    { duration: "2m", target: 10 },
    { duration: "2m", target: 1 },
    { duration: "2m", target: 0 },
  ],
};

export default function () {
  http.get("https://komarev.com/ghpvc/?username=rohitsSpace");
  sleep(1);
}
