import Link from "next/link";
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/facebook"}> facebook</Link>
        </li>
      </ul>
    </div>
  );
}
