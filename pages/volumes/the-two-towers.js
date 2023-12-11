import Link from "next/link";
import { volumes } from "../../lib/data.js"
import Head from "next/head.js";
import Image from "next/image";


export default function theTwoTowers() {
    const volume2 = volumes.find(({slug}) => slug === "the-two-towers"
    );
    return (
        <div>
         <Head>
            <title>The Two Towers</title>
        </Head>
          <Link href="/volumes">Back</Link>
          <h1>{volume2.title}</h1>
        <p>{volume2.description}</p>
        <ul>
         {volume2.books.map((book) => {
            return (
            <li key={book.slug}>
            <small>{book.ordinal}:</small>
            <strong>{book.title}</strong>
            </li>)
            })}
        </ul>
        <Image
        src="/images/the-two-towers.png"
        height={140}
        width={230}
        alt="The Fellowship of the ring"
      />
       </div>
    )
}