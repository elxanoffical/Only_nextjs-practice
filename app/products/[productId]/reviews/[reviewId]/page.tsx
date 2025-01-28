import React from "react";

export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <div>
      review {params.reviewId} for product {params.productId}
    </div>
  );
}
