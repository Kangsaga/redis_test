import { addressManager } from "../utils/adressManager";

export const getServerSideProps = async (context) => {
  // 1-2에서 만들어준 클라이언트 요청 req를 이용해 ip주소를 찾는 매서드
  const ip = addressManager.getAddressFromServer(context);
  const { req } = context;
  console.log("req", req);

  return {
    props: { data: "data" },
  };
};
