import { SSTConfig } from "sst";
import { Config, NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "create-next-app",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
        const SECRET_VAL1 = new Config.Secret(stack, 'SECRET_VAL1');
        const SECRET_VAL2 = new Config.Secret(stack, 'SECRET_VAL2');

      const site = new NextjsSite(stack, "site", {
        bind: [SECRET_VAL1, SECRET_VAL2],
        environment: {
            NEXT_PUBLIC_FOO: 'I am accessible on client side by using process.env.NEXT_PUBLIC_FOO'
        }
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
