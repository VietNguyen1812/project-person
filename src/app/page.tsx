"use client";
import Link from "next/link";
import AppTable from "@/components/table";
import x from "./styles/app.module.css";
import y from "./styles/test.module.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/blogs");
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        <li className={x["red"]}>
          <Link href={"/facebook"}>
            <span className={y["red"]}>Facebook</span>
          </Link>
        </li>
        <li style={{ margin: "20px 0" }}>
          <Link href={"/tiktok"}>Tiktok</Link>
        </li>
        <li style={{ margin: "20px 0" }}>
          <Link href={"/yotube"}>Youtube</Link>
        </li>
      </ul>
      <AppTable />
    </div>
  );
}
