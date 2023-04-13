import { Time } from "@itea/core/time";

export const handler = async () => {
  return {
    statusCode: 200,
    body: `Hello world. The time is ${Time.now()}`,
  };
};
