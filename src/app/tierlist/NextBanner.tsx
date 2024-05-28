export default function NextBanner() {
  return (
    <div className="flex flex-col w-full h-[18rem] bg-gradient-to-r from-purple-800 to-pink-700 rounded-xl relative p-6">
      <h1 className="text-4xl tracking-wide font-bold">Upcoming Character</h1>
      <div className="flex flex-col justify-center h-full">
        <p>
          <span className="mr-4 font-bold text-2xl uppercase tracking-wider">Yinlin</span>
          <span>Rectifier • Electro</span>
        </p>
      </div>
    </div>
  );
}