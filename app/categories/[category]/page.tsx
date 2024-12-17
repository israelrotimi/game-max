import { fetchGamesByCategory } from "@/lib/gameService";
import { Suspense } from 'react'
import { GamepadIcon } from 'lucide-react'
import GameGrid from '@/app/components/GameGrid'
import SearchBar from '@//app/components/SearchBar'
import CategoryTabs from '@/app/components/CategoryTabs'

const page = async ({params}: {params: {category: string}}) => {
    const {category} = params;
    const games = await fetchGamesByCategory(category);
  return (
    <div className="container mx-auto px-4 py-8 bg-game-bg-dark min-h-screen">
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center">
          <GamepadIcon className="text-game-accent-orange mr-3" size={32} />
          <h1 className="text-4xl font-bold text-game-accent-orange">
            GameMax
          </h1>
        </div>
        <div>
          {/* Add user/profile section if needed */}
        </div>
      </header>

      <SearchBar />

      <Suspense fallback={<div className="text-game-accent-orange">Loading categories...</div>}>
        <CategoryTabs />
      </Suspense>

      <Suspense fallback={<div className="text-game-accent-orange">Loading games...</div>}>
        {games && (
          <GameGrid games={games} />
        )}
      </Suspense>
    </div>
  );
}

export default page