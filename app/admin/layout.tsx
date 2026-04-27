import { Suspense } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<div>Loading AdminPage...</div>}>{children}</Suspense>
    </div>
  );
}