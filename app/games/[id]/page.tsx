import SearchBar from "@/app/components/SearchBar";
import { fetchGame } from "@/lib/gameService";
import { GamepadIcon } from "lucide-react";
import Image from "next/image";

const page = async ({ params } : {params: {id: number}}) => {
    const { id } = await params;
    const game = await fetchGame(id);
  return (
    <div className="container mx-auto px-4 py-8 bg-game-bg-dark min-h-screen">
      <header className="mb-8 flex items-center justify-between">
				<div className="flex items-center">
          <GamepadIcon className="text-game-accent-orange mr-3" size={32} />
          <h1 className="text-4xl font-bold text-game-accent-orange">
            GameMax
          </h1>
        </div>
      </header>
      <div className="container">
				<Image src={game.thumbnail} width="1200" height="300" alt="game.title" sizes="(max-width: 1200) 100vw" className="w-full mb-3" />
        <div className="grid grid-cols-2 gap-2">
          {game.screenshots.map(({image}, i) => {
            return (<img key={i} src={image} alt="" className="w-full"/>)
          })}
        </div>
        <div>
          <h1 className="text-white font-bold text-3xl text-center mt-3">{game.title}</h1>
          <p className="text-white p-3 mt-3">{game.description}</p>
        </div>
        <a href={game.game_url} target="_blank"><button className="bg-game-accent-purple hover:bg-game-accent-orange w-full p-3 rounded-md text-2xl">play</button></a>
      </div>
    </div>
  )
}

export default page
