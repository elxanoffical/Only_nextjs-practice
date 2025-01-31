"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <div>{error.message} <button className="px-4 py-2 border rounded-full border-black" onClick={reset}>try again</button></div>;
}
