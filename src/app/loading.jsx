import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Spinner color="success" />
        <span className="text-xs">Loading...</span>
      </div>
    </div>
  );
}