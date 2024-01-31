export const getServerSideProps = async ({ req }) => {
  // 1-2에서 만들어준 클라이언트 요청 req를 이용해 ip주소를 찾는 매서드
  const ip = addressManager.getAddressFromServer(req);

  return {
    props: {
      // 클라이언트 요청 주소를 _app.tsx의 AppProps로 전달한다.
      clientIp: ip || null,
    },
  };
};
