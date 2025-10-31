"use client";

import { useEffect, useRef } from "react";

export default function SearchBar() {
  const searchbarRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (searchbarRef.current != null) {
      searchbarRef.current.focus();
    }
  }, []);
  return (
    <input
      ref={searchbarRef}
      className="text-brand-navy-blue placeholder:text-neutral-500 bg-transparent focus:outline-none placeholder:text-lg text-lg sm:text-xl w-full"
      placeholder="Search House Number or Name"
    />
  );
}
