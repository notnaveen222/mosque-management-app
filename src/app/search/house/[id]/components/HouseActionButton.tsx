import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ButtonProps {
  icon: ReactNode;
  title: string;
  route: string;
}
export default function HouseActionButton({ icon, title, route }: ButtonProps) {
  const pathname = usePathname();
  return (
    <Link
      href={`${pathname}/${route}`}
      className="bg-brand-navy-blue px-3 sm:px-5 rounded-lg cursor-pointer text-white py-2 gap-x-2 w-full flex justify-center items-center my-4"
    >
      <div>{icon}</div>
      <div>{title}</div>
    </Link>
  );
}
