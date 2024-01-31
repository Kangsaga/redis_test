import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import handler from "./api/hello";
import axios from "axios";
import { useState } from "react";
import { addressManager } from "@/utils/adressManager";

const inter = Inter({ subsets: ["latin"] });

function Home(props) {
  const [name, setName] = useState("");

  const { clientIp } = props;

  const onClick = async () => {
    const result = await axios.get("/api/hello");
    console.log(result.data);
    axios.post("api/redisGet", { key: 1, value: clientIp });

    setName(result.data.name);
  };

  console.log("clientIp", clientIp);
  return (
    <>
      <h1>heollo</h1>

      <p style={{ color: "red" }}>{name}</p>

      <button onClick={onClick}>클릭</button>
    </>
  );
}

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

export default Home;
