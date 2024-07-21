import PortfolioItem from "../components/PortfolioItem"

export default function Portfolio() {
  return (
    <main className="container mx-auto min-h-screen">
      <div className="flex flex-wrap justify-center">
        <PortfolioItem
          title="Pomodoro"
          desc="Unlock Your Focus, One Pomodoro at a Time."
          tech="Flutter, Dart, Riverpod, "
          link="https://github.com/asvirts/pomodoro"
          img="https://camo.githubusercontent.com/3de310c47ce0aff7fd290cac6652f68bd14a40f8b9a42d43c03bb8fef936a452/68747470733a2f2f6d656469612e6c6963646e2e636f6d2f646d732f696d6167652f433445313241514547397a62586136523159772f61727469636c652d636f7665725f696d6167652d736872696e6b5f3732305f313238302f302f313536373437323539313530363f653d3231343734383336343726763d6265746126743d734776575a4f63415856376a444d6d654144315f7a766946483972316e722d735a59597a70306357776d34"
        />
        <PortfolioItem
          title="Giphy Search"
          desc="Find your next favorite GIF... the cool way"
          tech="React, Next.js, Typescript, APIs, Tailwind"
          link="https://github.com/asvirts/giphy-search"
          img="https://camo.githubusercontent.com/1e9481a8186553af39b570e642d047bd4574b50280c6ea1890cd9c9dfc760629/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f3145543768526c43635a4c75452f67697068792e676966"
        />
        <PortfolioItem
          title="TaskWallet"
          desc="Your tasks, with you everywhere."
          tech="React, Next.js, Supabase, Tailwind"
          link="https://github.com/asvirts/task-wallet"
          img="https://images.unsplash.com/photo-1581007871115-f14bc016e0a4?q=80&w=2766&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <PortfolioItem
          title="Onyxia's Lair"
          desc="(Mostly) text-based browser game."
          tech="Vanilla JavaScript, CSS"
          link="https://i.pinimg.com/originals/19/f1/ca/19f1ca5691f3f85b4f105463dce89fa5.jpg"
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
  )
}
