import NavBar from "@/app/(components)/NavBar";

export default function About() {
  return (
    <>
      <NavBar />
      
      <main>
      <div className="py-16 bg-white">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          {/* <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height=""> */}
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Belgom: dove l'esperienza si unisce all'eccellenza</h2>
          <p className="mt-6 text-gray-600">Belgom nasce a Belpasso, alle pendici dell'Etna, dalla visione della famiglia Rapisarda, 
            che oltre 60 anni fa decise di trasformare una passione in un'azienda.</p>
          <p className="mt-4 text-gray-600"> Fin dal principio, Belgom si è affermata come il punto di riferimento per chi cerca sicurezza, affidabilità e 
            un servizio che, generazione dopo generazione, accompagna i siciliani lungo le strade della loro terra.</p>
          <p className="mt-4 text-gray-600"> Oggi, l'azienda continua a crescere, coniugando la solida tradizione familiare 
            con un approccio moderno e innovativo, integrando l'esperienza accumulata con le più recenti 
            tecnologie e affrontando con successo le sfide del mercato attuale.</p>
          <p className="mt-4 text-gray-600">Belgom non è solo un leader nella vendita al dettaglio e all'ingrosso di pneumatici: 
            è il luogo dove l'esperienza si unisce all'eccellenza.  </p>
          <p className="mt-4 text-gray-600"> Attraverso una rete di partnership che si estende in tutta la Sicilia, Belgom offre molto 
            più che semplici prodotti: offre competenza, fiducia e un servizio personalizzato che riflette la dedizione della famiglia Rapisarda.</p>
          <p className="mt-4 text-gray-600"> Ogni cambio di pneumatico, ogni convergenza, ogni consulenza è un impegno a continuare 
        una tradizione di qualità che ha reso Belgom un nome di cui fidarsi. </p>
          <p className="mt-4 text-gray-600"> Da Belgom, il viaggio è sempre una strada sicura, da percorrere insieme.</p>
        </div>
      </div>
  </div>
</div>
<div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                        <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                            Get in touch
                        </h1>
                        <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                            Fill in the form to start a conversation
                        </p>

                        <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                Acme Inc, Street, State,
                                Postal Code
                            </div>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                +44 1234567890
                            </div>
                        </div>

                        <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                info@acme.org
            </div>
        </div>
</div>

        <section>
          <h2>Contatti</h2>
          <h3>Belgom</h3>
          <p>di Rapisarda Sebastiano</p>
          <p>Via VIII Traversa 36-38, 95032 Belpasso (CT)</p>
        </section>
      </main>
    </>
  );
}
