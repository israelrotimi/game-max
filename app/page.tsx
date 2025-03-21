import { Suspense } from 'react'
import { GamepadIcon } from 'lucide-react'
import { fetchFeaturedGames } from '@/lib/gameService'
import GameGrid from '@/app/components/GameGrid'
import SearchBar from '@/app/components/SearchBar'
import CategoryTabs from '@/app/components/CategoryTabs'

export default async function HomePage() {
  const games = await fetchFeaturedGames()

  return (
    <div className="w-full min-h-screen px-4 py-8 bg-game-bg-dark text-white">
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center">
          <GamepadIcon className="text-game-accent-orange mr-3" size={32} />
          <a href="/">
            <h1 className="text-4xl font-bold text-game-accent-orange">
              GameMax
            </h1>
          </a>
        </div>
        <div>
          {/* Add user/profile section if needed */}
        </div>
      </header>

      <SearchBar showLink={true} />

      <Suspense fallback={<div className="text-game-accent-orange">Loading categories...</div>}>
        <CategoryTabs active="featured" />
      </Suspense>

      <Suspense fallback={<div className="text-game-accent-orange">Loading games...</div>}>
        {games && <GameGrid games={games} />}
      </Suspense>
    </div>
  )
}