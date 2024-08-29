import Link from "next/link";
"use client"

export default function Home() {
  return (
    <main>
      <h1>Hello next</h1>
      <Link href="/pippo">pippo</Link>
    </main>
  );
}
