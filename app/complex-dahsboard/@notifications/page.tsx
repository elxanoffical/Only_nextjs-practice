import Card from "@/app/components/card";
import Link from "next/link";
import React from "react";

export default function Notifications() {
  return (
    <div>
      <Card>
        <h1>Notifications</h1>
        <Link className="border-2 rounded-full border-blue-400" href="/complex-dahsboard/archived">Archived</Link>
      </Card>
    </div>
  );
}
