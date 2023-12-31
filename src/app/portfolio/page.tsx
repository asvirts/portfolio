import PortfolioItem from "../components/PortfolioItem"

export default function Portfolio() {
  return (
    <main className="container mx-auto min-h-screen">
      <div className="flex flex-wrap justify-center">
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
          title="CFB Community Poll"
          desc="Allows users to rank college football teams."
          tech="Svelte, Sveltekit, Supabase, PostgreSQL, Tailwind"
          link="https://github.com/asvirts/cfb-community-poll"
          img="https://camo.githubusercontent.com/4a501b54b2110c89849c1aab28b89424706623013601ab66d02940133c764838/68747470733a2f2f647862687372717972723639302e636c6f756466726f6e742e6e65742f7369646561726d2e6e65787467656e2e73697465732f726f6c6c746964652e636f6d2f696d616765732f323032312f31312f382f3131303632315f4d46425f416e646572736f6e57695f4c53555f5253333131352e6a7067"
        />
        <PortfolioItem
          title="Onyxia's Lair"
          desc="(Mostly) text-based browser game."
          tech="Vanilla JavaScript, CSS"
          link="https://github.com/asvirts/onyxias-lair"
          img="https://camo.githubusercontent.com/a172192ac10868a05ca8e319a3a1bada512614c1691ed6a9c0fe18f9555c7a95/68747470733a2f2f7374617469632e77696b69612e6e6f636f6f6b69652e6e65742f776f7770656469612f696d616765732f642f64322f576f575f436c61737369635f4f6e797869612e6a70672f7265766973696f6e2f6c61746573742f7363616c652d746f2d77696474682d646f776e2f313030303f63623d3230313930393130303031343134"
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
