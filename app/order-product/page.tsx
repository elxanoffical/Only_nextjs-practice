"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const route = useRouter()
    const handleClick = ()=>{
        console.log("placing your order")
        route.push("/")
    }
  return (
    <>
      <h1>Order Product</h1>
      <button className="py-1 px-3 rounded-full bg-gray-300" onClick={handleClick}>Place order</button>
    </>
  );
}
