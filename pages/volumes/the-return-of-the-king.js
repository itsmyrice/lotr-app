import Link from "next/link";
import { volumes } from "../../lib/data.js"
import Head from "next/head.js";
import Image from "next/image";


export default function theReturnOfTheKings() {
    const volume3 = volumes.find(({slug}) => slug === "the-return-of-the-king"
    );
    return (
        <div>
        <Head>
        <title>The Return Of The King</title>
        </Head>
        <Link href="/volumes">Back</Link>
        <h1>{volume3.title}</h1>
        <p>{volume3.description}</p>
        <ul>
         {volume3.books.map((book) => {
            return (
            <li key={book.slug}>
            <small>{book.ordinal}</small>
            <small>{book.title}</small>
            </li>)
            })}
        </ul>
        <Image
        src="/images/the-return-of-the-king.png"
        height={140}
        width={230}
        alt="The Fellowship of the ring"
      />
        </div>
    )
}