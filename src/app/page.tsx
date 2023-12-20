import Filters from "@/components/Filters";
import JobListings from "@/components/JobListings";

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <Filters />
      <JobListings />
    </main>
  );
}
