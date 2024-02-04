import Paypal from "./src/index";

const clientId = "AT3frCPisQkPVvDpj9bSuku6QSvnf3KTryekADMVmPScg-1QtUBkr2Hxj-IJkQtq_qtwFc0IG5mVt4-B";
const clientSecret = "EJFSX2jdHTvYXm6KDdthkdqWjHUK8HNdMwd0yUFAV1X7lzyAQnWBtaG87plMfDkcTy6D44kJsZt7FgYx";
const environment = "sandbox";

const paypalClient = new Paypal({ clientId, clientSecret, environment });

(async () => {
  const token = await paypalClient.authorization.getToken();
  console.log(token);
  await paypalClient.authorization.terminateAccessToken(token);
})();
