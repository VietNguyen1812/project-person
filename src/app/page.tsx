import Link from "next/link";
import x from "./styles/app.module.css";
import y from "./styles/test.module.css";
export default function Home() {
  return (
    <div>
      <ul>
        <li className={x["red"]}>
          <Link href={"/facebook"}>
            <span className={y["red"]}>solid</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
