"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="w-fit hover:bg-neutral-100 rounded-full pr-1.5 py-1 cursor-pointer transition-all duration-150"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-8 sm:size-10 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
}
