import Filters from "@/components/Filters";
import JobListings from "@/components/JobListings";

export default function HomePage() {
  return (
    <main className="container mx-auto px-4">
      {/* <Filters /> */}
      <JobListings />
    </main>
  );
}
