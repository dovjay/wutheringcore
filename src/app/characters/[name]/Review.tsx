export default function Review() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-6xl font-bold text-center">Review</h1>

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4 overflow-x-auto">
        <h2 className="text-xl font-bold">Quick Summary</h2>

        <div className="flex flex-col gap-5">
          <p>Calcharo is an ultimate-centric Electro main DPS that focuses on executing some of the longest combo sequences in the game for exceptionally high damage. While Calcharo has some of the highest - if not the highest - damage potential of any team (post-release of Yinlin) he isn’t the easiest character to play. Due to his long combo sequences and reliance on his empowered ultimate state to deal the bulk of his damage, one or two mistakes can seriously impact the flow of his rotation leading to the loss of much of his potential.</p>

          <p>Another large part of Calcharo’s kit is his above-average Concerto Energy generation, allowing him to gain access to his Outro faster than most other main damage dealers in the game, opening him up to mid-rotation swaps which - if you’re skilled enough - can lead to huge damage gains. To make this even stronger many of Calcharo’s most powerful abilities such as “Death Messenger” have longer animation times (close to 2 seconds) which can be “swap canceled”, allowing him to finish his biggest moves while you’re already playing the next character, where you can use an ability or two and then swap straight back to Calcharo and continue your combo - with the added bonus of triggering any available Concerto on either character you employed.</p>

          <p>In conclusion, Calcharo is a combo-heavy character with a lot of room for skillful play to dish out some of the most damage of all characters when paired with Yinlin, but if you mess up his rotation, his damage will suffer. He is a top-tier choice for the primary endgame mode Tower of Adversity if you can pilot him effectively.</p>
        </div>
      </div>

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4 overflow-x-auto">
        <h2 className="text-xl font-bold">Pros & Cons</h2>

        <div className="flex gap-2">
          <div className="p-3 bg-zinc-700 rounded-xl w-full">
            <h3 className="font-bold text-lg">Pros</h3>
            <ul className="list-disc list-inside">
              <li>List of pros</li>
              <li>List of pros</li>
              <li>List of pros</li>
              <li>List of pros</li>
            </ul>
          </div>

          <div className="p-3 bg-zinc-700 rounded-xl w-full">
            <h3 className="font-bold text-lg">Cons</h3>
            <ul className="list-disc list-inside">
              <li>List of cons</li>
              <li>List of cons</li>
              <li>List of cons</li>
              <li>List of cons</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4 overflow-x-auto">
        <h2 className="text-xl font-bold">Damage Profile</h2>

        <div className="w-64 aspect-square rounded-full bg-zinc-300" />

        <div className="flex flex-wrap gap-6 mx-auto">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-lime-400 rounded-full" />
            <div>Basic</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-lime-400 rounded-full" />
            <div>Skill</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-lime-400 rounded-full" />
            <div>Liberation</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-lime-400 rounded-full" />
            <div>Intro</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-lime-400 rounded-full" />
            <div>Outro</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-lime-400 rounded-full" />
            <div>Echo</div>
          </div>
        </div>
      </div>
    </div>
  );
}