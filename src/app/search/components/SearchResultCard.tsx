import Link from "next/link";

interface CardProps {
  houseNumber: number;
  name: string;
  fatherName: string;
  familyName: string;
}
export default function SearchResultCard({
  houseNumber,
  name,
  fatherName,
  familyName,
}: CardProps) {
  return (
    <Link
      href={`/search/house/${houseNumber}`}
      className="bg-brand-bg-blue/5 border border-brand-bg-blue/40 flex flex-col p-3 text-brand-navy-blue rounded-xl cursor-pointer"
    >
      <div>
        {houseNumber}. {name}
      </div>
      <div className="">s/o {fatherName}</div>
      <div className="text-sm text-brand-navy-blue/50">{familyName}</div>
    </Link>
  );
}
