import Image from 'next/image'
import { GameInList } from '@/types/Game'
import Link from 'next/link'

interface GameGridProps {
  games: GameInList[]
}

export default function GameGrid({ games }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {games.map((game, i) => (
        <Link key={i} href={`/games/${game.id}`}>
        <div 
          key={game.id} 
          className="bg-game-bg-medium rounded-lg shadow-xl overflow-hidden 
            transform transition-all hover:scale-105 border border-game-accent-purple/30"
        >
          <div className="relative w-full h-48">
              <Image
              src={game.thumbnail} 
              alt={game.title}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-game-accent-orange">
                {game.title}
              </h3>
            </div>
            <p className="text-gray-400 mb-4">{game.short_description}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  )
}
