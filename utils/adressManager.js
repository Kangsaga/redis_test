export const addressManager = {
  saveAddressToStorage: (address) => {
    sessionStorage.setItem("address", address);
  },

  getAddressFromStorage: () => {
    const data = sessionStorage.getItem("address");
    return data;
  },
  // getAddressFromServer는 getServerSideProps에서 사용됩니다.
  getAddressFromServer: (req) => {
    const forwarded = req.headers["x-forwarded-for"];
    const ip =
      typeof forwarded === "string"
        ? forwarded.split(/, /)[0]
        : req.socket.remoteAddress;
    return ip;
  },
};
