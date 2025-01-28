import React from "react";

export default function ProductsDetail({
  params,
}: {
  params: { productId: string };
}) {
  return <div>ProductsDetail {params.productId}</div>;
}
