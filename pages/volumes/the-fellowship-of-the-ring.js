import Link from "next/link";
import { volumes } from "../../lib/data.js";
import Head from "next/head.js";
import Image from "next/image";

export default function theFellowshipOfTheRing() {
  const volume1 = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <div>
      <Head>
        <title>The Fellowship Of The Ring</title>
      </Head>
      <Link href="/volumes">Back</Link>
      <h1>{volume1.title}</h1>
      <p>{volume1.description}</p>
      <ul>
        {volume1.books.map((book) => {
          return (
            <li key={book.slug}>
              <small>{book.ordinal}</small>
              <small>{book.title}</small>
            </li>
          );
        })}
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        height={140}
        width={230}
        alt="The Fellowship of the ring"
      />
    </div>
  );
}
