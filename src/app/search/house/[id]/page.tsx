"use client";
import { useParams } from "next/navigation";
import BackButton from "../../components/Backbutton";
import InfoField from "./components/InfoField";

export default function HousePage() {
  const houseId = useParams().id;
  return (
    <div className="flex flex-col px-4 sm:px-8 pt-12">
      <div className="w-fit mb-5">
        <BackButton />
      </div>
      <div className="w-full bg-brand-bg-blue/5 flex p-4 rounded-xl">
        <div className="flex-1 flex flex-col space-y-1.5">
          <InfoField title="Name" value="Muhammed Shafeek O" />
          <InfoField title="Father's Name" value="Abdulla O" />
          <InfoField title="Family's Name" value="Oravingal" />
          <InfoField title="Food" value="Wateva" />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col justify-between ">
            <div className="text-sm text-brand-title-text">House Number:</div>
            <div className="text-7xl text-brand-navy-blue">{houseId}</div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm text-brand-title-text">
              Monthly Donation:
            </div>
            <div className="text-7xl text-brand-value-text">₹120</div>
          </div>
        </div>
      </div>
    </div>
  );
}
