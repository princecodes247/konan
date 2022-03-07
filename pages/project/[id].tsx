import type { NextPage } from "next";
import DashboardHeader from "../../components/DashboardHeader";
import DetailsGrid from "../../components/DetailsGrid";

export default function Project() {
  return (
    <main>
      <DashboardHeader title="No Hungry Kid" />
      <div className="flex flex-col">
        
        <DetailsGrid />
      </div>
    </main>
  );
}
