import Link from "next/link";

export default function Products() {
  return (
    <div>
      <Link className="border-2 border-black" href="/">
        HomePage
      </Link>
      <h1>Products List</h1>
      <h1>
        <Link className="border-b-2 border-red-600" href="products/1">
          Products 1
        </Link>
      </h1>
      <h1>
        <Link className="border-b-2 border-red-600" href="products/2">
          Products 2
        </Link>
      </h1>
      <h1>
        <Link className="border-b-2 border-red-600" href="products/3" replace> // replace yazdigda arxaya qayitmaqa click etdikde HomePage yonlendirir
          Products 3
        </Link>
      </h1>
    </div>
  );
}
