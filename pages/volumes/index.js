import Link from "next/link";
import Head from "next/head.js";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Volume Title</title>
      </Head>
      <Link href="/">Back to the main page</Link>
      <main>
        <h1>Volume Title</h1>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship Of The Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return Of The King
          </Link>
        </li>
      </main>
    </div>
  );
}
