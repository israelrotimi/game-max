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
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
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
              <h3 className="text-xl font-bold">{game.title}</h3>
              <div className="flex items-center">
                <Star className="text-yellow-500 mr-1" size={20} />
                <span>{game.rating}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{game.description}</p>
            <button 
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Play Now
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}