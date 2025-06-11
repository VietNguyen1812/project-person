import Link from "next/link";
import x from "../styles/app.module.css";
import y from "../styles/test.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is the home page of the application",
};
export default function Home() {
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
    </div>
  );
}
