import NavBar from "@/app/(components)/NavBar";
import { getProducts } from "@/action/get-products";

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      <NavBar />
      <main className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.model_id} className="card">
            <img
              src={product.cdn_photo_catalog || "/placeholder.jpg"}
              alt={product.model_name}
              width="180"
              height="180"
            />
            <h3>{product.model_name}</h3>
            <p>Type: {product.car_type_str}</p>
            <p>Season: {product.season}</p>
          </div>
        ))}
      </main>
    </>
  );
}
