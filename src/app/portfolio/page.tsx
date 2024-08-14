import PortfolioItem from "../components/PortfolioItem";

export default function Portfolio() {
  return (
    <main className="container mx-auto min-h-screen">
      <div className="flex flex-wrap justify-center">
        <PortfolioItem
          title="Giphy Search"
          desc="Find your next favorite GIF... the cool way"
          tech="React, Next.js, Typescript, APIs, Tailwind"
          link="https://github.com/asvirts/giphy-search"
          img="https://blog.hootsuite.com/wp-content/uploads/2022/06/How-to-Make-a-GIF-1.gif"
        />
        <PortfolioItem
          title="Contacts"
          desc="App to store personal contacts."
          tech="Ruby on Rails, SQL, Bootstrap"
          link="https://github.com/asvirts/contacts"
          img="https://images.unsplash.com/photo-1581007871115-f14bc016e0a4?q=80&w=2766&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <PortfolioItem
          title="Pomodoro"
          desc="Unlock Your Focus, One Pomodoro at a Time."
          tech="Flutter, Dart, Riverpod, "
          link="https://github.com/asvirts/pomodoro"
          img="https://t4.ftcdn.net/jpg/08/29/52/97/360_F_829529710_3GtyPgMV8wUjd7lpik1C7iZ9f8OFR84A.jpg"
        />
        <PortfolioItem
          title="Onyxia's Lair"
          desc="(Mostly) text-based browser game."
          tech="Vanilla JavaScript, CSS"
          link="https://github.com/asvirts/onyxias-lair"
          img="https://img2.wallspic.com/previews/0/7/7/1/5/151770/151770-andorhal-world_of_warcraft-onyxia-ragnaros-wow_classic-x750.jpg"
        />
        <PortfolioItem
          title="Madlib"
          desc="Text-based console game."
          tech="C#"
          link="https://github.com/asvirts/Madlib"
          img="https://www.haleyproductions.com/wp-content/uploads/2019/08/MadLibs-TeamBuilding.png"
        />
        <PortfolioItem
          title="Calculator"
          desc="Calculator to calculate stuff."
          tech="React"
          link="https://github.com/asvirts/React-Calculator-App"
          img="https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&q=80&w=2650&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </main>
  );
}
