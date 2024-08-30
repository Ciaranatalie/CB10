import NavBar from "@/app/(components)/NavBar";
import { getProducts } from "@/action/get-products";

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      {/* <NavBar /> */}
      <main className="grid grid-cols-3 gap-4 p-5">
        {products.map((product) => (
          <div
            key={product.modello}
            className="card p-4 border rounded-lg shadow-sm"
          >
            <img
              src={product.immagine || "/placeholder.jpg"}
              alt={product.modello}
              className="w-full h-40 object-cover"
            />
            <h3 className="text-lg font-semibold mt-2">
              {product.marca} - {product.modello}
            </h3>
            <p className="text-sm">Size: {product.misura}</p>
            <p className="text-lg font-bold text-green-600">{product.prezzo}</p>
          </div>
        ))}
      </main>
    </>
  );
}
