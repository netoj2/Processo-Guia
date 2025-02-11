import { check, sleep } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { duration: "10s", target: 50 },
    { duration: "10s", target: 100 },
    { duration: "20s", target: 100 },
    { duration: "10s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(95)<500"],
    http_req_failed: ["rate<0.51"],
  },
};

export default function () {
  const responseValid = http.get("http://localhost:3000/users");
  check(responseValid, {
    "status é 200": (resp) => resp.status === 200,
    "tempo de resposta < 500ms": (resp) => resp.timings.duration < 500,
  });

  const responseError = http.get("http://localhost:3000/invalid-endpoint");
  check(responseError, {
    "status de 50% é 404": (resp) => resp.status === 404,
  });

  sleep(1);
}
