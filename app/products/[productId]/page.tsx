
export default function ProductsDetail({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <h1>ProductsDetail {params.productId}</h1>
    </div>
  );
}
