import NavBar from "@/app/(components)/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <header className="header">
        <h1>Welcome to Tyre E-Commerce</h1>
        <p>Your one-stop shop for all your tyre needs.</p>
      </header>
      <main>
        <section className="hero">
          <h2>Featured Products</h2>
          <Link href="/products">
            <a className="underline">Check out our tyres</a>
          </Link>
        </section>
      </main>
    </>
  );
}
