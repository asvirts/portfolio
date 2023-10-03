import PortfolioItem from "@/components/PortfolioItem";

export default function Home() {
  return (
    <main className="flex container mx-auto min-h-screen items-center justify-between">
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </main>
  );
}
