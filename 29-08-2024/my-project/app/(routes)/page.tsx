import NavBar from "@/app/(components)/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <header className="header">
        <h1>Belgom: dove l'esperienza si unisce all'eccellenza</h1>
      </header>
      <main>
        <section className="hero">
          <h2>I nostri prodotti</h2>
          <Link href="/products" className="underline">
            Dai un'occhiata ai nostri prodotti
          </Link>
        </section>
      </main>
    </>
  );
}
