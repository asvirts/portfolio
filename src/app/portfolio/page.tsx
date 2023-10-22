import PortfolioItem from "../components/PortfolioItem";

export default function Portfolio() {
  return (
    <main className="flex flex-wrap container mx-auto min-h-screen items-center justify-between">
      <PortfolioItem
        title="CFB Community Poll"
        desc="Allows users to rank college football teams. Uses Svelte, Sveltekit, Supabase."
        link="https://github.com/asvirts/cfb-community-poll"
      />
      <PortfolioItem
        title="SpaceX"
        desc="Practicing querying an API with GraphQL in React."
        link="https://github.com/asvirts/space-x"
      />
      <PortfolioItem
        title="Onyxia's Lair"
        desc="This is a text-based JavaScript game."
        link="https://github.com/asvirts/onyxias-lair"
      />
      <PortfolioItem
        title="Madlib"
        desc="Madlib game written in C#."
        link="https://github.com/asvirts/Madlib"
      />
      <PortfolioItem
        title="Calculator"
        desc="React calulator"
        link="https://github.com/asvirts/React-Calculator-App"
      />
    </main>
  );
}
