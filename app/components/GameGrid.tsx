import Image from 'next/image'
import { Game } from '@/types/Game'
import { Star } from 'lucide-react'

interface GameGridProps {
  games: Game[]
}

export default function GameGrid({ games }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {games.map((game) => (
        <div 
          key={game.id} 
          className="bg-game-bg-medium rounded-lg shadow-xl overflow-hidden 
            transform transition-all hover:scale-105 border border-game-accent-purple/30"
        >
          <div className="relative w-full h-48">
            <Image 
              src={game.thumbnail} 
              alt={game.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-game-accent-orange">
                {game.title}
              </h3>
              <div className="flex items-center">
                <Star className="text-game-accent-purple mr-1" size={20} />
                <span>{game.rating}</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">{game.description}</p>
            <button 
              className="w-full bg-game-accent-orange text-black 
                py-2 rounded-lg hover:bg-game-accent-purple 
                transition-colors font-bold"
            >
              Play Now
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}