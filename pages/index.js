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

  console.log("props", props);
  const onClick = async () => {
    const result = await axios.get("/api/hello");
    console.log(result.data);
    axios.post("api/redisGet", { key: 1, value: 1 });

    setName(result.data.name);
  };

  // console.log("clientIp", clientIp);
  return (
    <>
      <h1>heollo</h1>

      <p style={{ color: "red" }}>{name}</p>

      <button onClick={onClick}>클릭</button>
    </>
  );
}

export default Home;
