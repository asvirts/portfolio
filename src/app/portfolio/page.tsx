import PortfolioItem from "../components/PortfolioItem";

export default function Portfolio() {
  return (
    <main className="flex flex-wrap container mx-auto min-h-screen items-center justify-between">
      <PortfolioItem
        title="SpaceX"
        desc="Practicing querying an API with GraphQL in React."
      />
      <PortfolioItem
        title="Onyxia's Lair"
        desc="This is a text-based JavaScript game."
      />
      <PortfolioItem title="Madlib" desc="Madlib game written in C#." />
      <PortfolioItem title="Calculator" desc="React calulator" />
    </main>
  );
}
