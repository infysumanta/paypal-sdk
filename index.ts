import Paypal from "./src/index";

const clientId = "";
const clientSecret = "";
const environment = "sandbox";

const paypalClient = new Paypal({ clientId, clientSecret, environment });

(async () => {
  const token = await paypalClient.authorization.getToken();
  console.log(token);
  await paypalClient.authorization.terminateAccessToken(token);
})();
