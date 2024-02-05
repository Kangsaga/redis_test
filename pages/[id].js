import { addressManager } from "@/utils/adressManager";

export default function Ip(props) {
  console.log(props);
  return <div>Enter</div>;
}

export async function getServerSideProps(ctx) {
  //   const req = ctx
  const ip = addressManager.getAddressFromServer(ctx.req);
  //   console.log("req", ctx.req.headers["x-forwarded-for"]);
  //   console.log(ctx.[]);

  return {
    props: { data: ip },
  };
}
