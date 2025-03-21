import { fetchGame } from "@/lib/gameService";
import { GamepadIcon } from "lucide-react";
import Image from "next/image";

const page = async ({ params } : {params: Promise<{id: number}>}) => {
    const { id } = await params;
    const game = await fetchGame(id);
  return (
    <div className="min-h-screen bg-game-bg-dark">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-game-bg-dark/95 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <GamepadIcon className="text-game-accent-orange mr-3" size={32} />
            <h1 className="text-3xl md:text-4xl font-bold text-game-accent-orange">
              GameMax
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[300px] md:h-[500px] mb-8">
            <Image 
              src={game.thumbnail} 
              fill
              alt={game.title}
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-game-bg-dark via-game-bg-dark/50 to-transparent rounded-2xl">
              <div className="absolute bottom-0 p-6 md:p-8">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{game.title}</h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/5 rounded-xl p-6">
                <p className="text-white/90 leading-relaxed text-lg">{game.description}</p>
              </div>
              
              <a href={game.game_url} target="_blank" rel="noopener noreferrer"
                className="block w-full my-4">
                <button className="bg-game-accent-purple hover:bg-game-accent-orange transition-all duration-300 w-full p-4 rounded-xl text-xl md:text-2xl font-bold uppercase tracking-wider hover:shadow-lg hover:scale-[1.02]">
                  Play Now
                </button>
              </a>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white/5 rounded-xl p-6">
                <h2 className="text-white font-bold text-2xl mb-4">Screenshots</h2>
                <div className="space-y-4">
                  {game.screenshots.map(({image}, i) => (
                    <div key={i} className="relative group">
                      <img 
                        src={image} 
                        alt={`${game.title} screenshot ${i + 1}`}
                        className="w-full rounded-lg shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
