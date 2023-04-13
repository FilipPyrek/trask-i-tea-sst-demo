import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";
import { ConfigStack } from "./stacks/ConfigStack";

export default {
  config(_input) {
    return {
      name: "itea",
      stage: 'prod',
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app
      .stack(ConfigStack)
      .stack(API);
  }
} satisfies SSTConfig;
