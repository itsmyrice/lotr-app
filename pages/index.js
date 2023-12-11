import Link from "next/link";
import { introduction } from "@/lib/data.js";
import Head from "next/head.js";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>All Volumes: Lord Of The Rings</title>
      </Head>
      <h1>Lord of the Rings</h1>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes">Volume Page</Link>
        </li>
      </ul>
    </div>
  );
}
