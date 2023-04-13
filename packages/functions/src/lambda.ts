import { Time } from "@itea/core/time";
import { Config } from "sst/node/config";

export const handler = async () => {
  console.log({
    APP_VERSION: Config.APP_VERSION,
    STRIPE_KEY: Config.STRIPE_KEY
  })

  return {
    statusCode: 200,
    body: `Hello world. The time is ${Time.now()}`,
  };
};
