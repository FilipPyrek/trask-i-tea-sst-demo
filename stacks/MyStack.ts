import { StackContext, Api, use } from "sst/constructs";
import { ConfigStack } from "./ConfigStack";

export function API({ stack }: StackContext) {
  const {appVersion, stripeKey} = use(ConfigStack)

  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

  api.bind([appVersion, stripeKey])

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
