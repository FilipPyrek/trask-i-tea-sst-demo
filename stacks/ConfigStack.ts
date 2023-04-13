import { StackContext, Config } from "sst/constructs";

type ConfigStackOutput = {
  appVersion: Config.Parameter,
  stripeKey: Config.Secret
}

export function ConfigStack({ stack }: StackContext): ConfigStackOutput {
  const appVersion = new Config.Parameter(
    stack, "APP_VERSION",
    { value: "1.2.0" }
  );

  const stripeKey = new Config.Secret(
    stack, "STRIPE_KEY"
  );

  return {
    appVersion,
    stripeKey
  }
}
