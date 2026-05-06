"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function Short() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "all";

  const handleClick = (value) => {

    if (value === "all") {
      router.push("/animals");
    } 
    else if (value === "low") {
      router.push("/animals?sort=low");
    } 
    else if (value === "high") {
      router.push("/animals?sort=high");
    }
  };

  return (
    <div className="flex gap-3 justify-center">

      <button
        onClick={() => handleClick("all")}
        className={`px-4 py-2 rounded ${
          currentSort === "all" ? "bg-black text-white" : "bg-gray-200"}`}>
        All
      </button>

      <button
        onClick={() => handleClick("low")}
        className={`px-4 py-2 rounded ${currentSort === "low" ? "bg-green-600 text-white" : "bg-gray-200"}`}>
        Low → High
      </button>

      <button
        onClick={() => handleClick("high")}
        className={`px-4 py-2 rounded ${currentSort === "high" ? "bg-blue-600 text-white" : "bg-gray-200"}`} >
        High → Low
      </button>

    </div>
  );
}