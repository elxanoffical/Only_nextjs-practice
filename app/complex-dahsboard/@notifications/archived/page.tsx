import Card from "@/app/components/card";
import Link from "next/link";
import React from "react";

export default function ArchivedNotifications() {
  return (
    <div>
      <Card>
        <h1>Archived Notifications</h1>
        <Link className="border-2 rounded-full border-blue-400" href="/complex-dahsboard">default</Link>
      </Card>
    </div>
  );
}
