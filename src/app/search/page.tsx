import SearchResultCard from "./components/SearchResultCard";

export default function SearchPage() {
  const residents = [
    {
      houseNumber: 1,
      name: "Muhammed Adil O",
      fatherName: "Ismail O",
      familyName: "Oravingal",
    },
    {
      houseNumber: 2,
      name: "Kunjimuhammed M",
      fatherName: "Ahmedkutty M",
      familyName: "Manamully",
    },
    {
      houseNumber: 3,
      name: "Mohammed Shafeek N",
      fatherName: "Kunjuppa N",
      familyName: "Nezhukil",
    },
    {
      houseNumber: 4,
      name: "Noufal M",
      fatherName: "Ahmed Kutty M",
      familyName: "Manamully",
    },
    {
      houseNumber: 5,
      name: "Salman M",
      fatherName: "Ahmed Kutty M",
      familyName: "Manamully",
    },
    {
      houseNumber: 6,
      name: "Shamsudheen K",
      fatherName: "Abdul Kareem K",
      familyName: "Kottayi",
    },
    {
      houseNumber: 7,
      name: "Fahad M",
      fatherName: "Muhammedali M",
      familyName: "Mahallu",
    },
    {
      houseNumber: 8,
      name: "Rizwan P",
      fatherName: "Rahman P",
      familyName: "Parambil",
    },
    {
      houseNumber: 9,
      name: "Imran T",
      fatherName: "Ibrahim T",
      familyName: "Thottiyil",
    },
    {
      houseNumber: 10,
      name: "Haseeb V",
      fatherName: "Hamza V",
      familyName: "Valiyaveettil",
    },
  ];

  return (
    <div className="flex flex-col px-4 sm:px-8">
      <div className="flex gap-x-2 items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 sm:size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="w-full rounded-full bg-brand-bg-shade/60 flex items-center p-3 sm:p-6 gap-x-4 my-5">
          <svg
            className="size-5"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8333 15L8.58333 9.75C8.16667 10.0833 7.6875 10.3472 7.14583 10.5417C6.60417 10.7361 6.02778 10.8333 5.41667 10.8333C3.90278 10.8333 2.62167 10.3089 1.57333 9.26C0.525 8.21111 0.000555996 6.93 4.40917e-07 5.41667C-0.000555115 3.90333 0.523889 2.62222 1.57333 1.57333C2.62278 0.524444 3.90389 0 5.41667 0C6.92944 0 8.21083 0.524444 9.26083 1.57333C10.3108 2.62222 10.835 3.90333 10.8333 5.41667C10.8333 6.02778 10.7361 6.60417 10.5417 7.14583C10.3472 7.6875 10.0833 8.16667 9.75 8.58333L15 13.8333L13.8333 15ZM5.41667 9.16667C6.45833 9.16667 7.34389 8.80222 8.07333 8.07333C8.80278 7.34444 9.16722 6.45889 9.16667 5.41667C9.16611 4.37444 8.80167 3.48917 8.07333 2.76083C7.345 2.0325 6.45944 1.66778 5.41667 1.66667C4.37389 1.66556 3.48861 2.03028 2.76083 2.76083C2.03306 3.49139 1.66833 4.37667 1.66667 5.41667C1.665 6.45667 2.02972 7.34222 2.76083 8.07333C3.49194 8.80444 4.37722 9.16889 5.41667 9.16667Z"
              fill="#585A63"
              fillOpacity="0.5"
            />
          </svg>

          <input
            className="text-brand-navy-blue placeholder:text-neutral-500 bg-transparent focus:outline-none placeholder:text-lg text-lg sm:text-xl w-full"
            placeholder="Search House Number or Name"
          />
        </div>
      </div>
      <div className="space-y-2">
        {residents.map((resident, index) => (
          <SearchResultCard
            houseNumber={resident.houseNumber}
            name={resident.name}
            fatherName={resident.fatherName}
            familyName={resident.familyName}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
