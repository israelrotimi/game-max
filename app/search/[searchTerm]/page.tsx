import { fetchFeaturedGames } from "@/lib/gameService";
import { filterGames } from "@/lib/filterGames";
import { Suspense } from 'react'
import { GamepadIcon } from 'lucide-react'
import GameGrid from '@/app/components/GameGrid'
import SearchBar from '@/app/components/SearchBar'
import CategoryTabs from '@/app/components/CategoryTabs'
import { GameInList } from "@/types/Game";

interface SearchParams {
  params: {
    searchTerm: string
  }
}

const page = async ({ params }: SearchParams) => {
  const { searchTerm } = params;
  const allGames = await fetchFeaturedGames();
  const filteredGames = filterGames(allGames as GameInList[], searchTerm);

  return (
    <div className="container mx-auto px-4 py-8 bg-game-bg-dark min-h-screen">
      <header className="mb-8 flex items-center justify-between">
        <a href="/">
          <div className="flex items-center">
            <GamepadIcon className="text-game-accent-orange mr-3" size={32} />
            <h1 className="text-4xl font-bold text-game-accent-orange">
              GameMax
            </h1>
          </div>
        </a>
        <div>
          {/* Add user/profile section if needed */}
        </div>
      </header>

      <SearchBar searchVal={searchTerm} />

      <Suspense fallback={<div className="text-game-accent-orange">Loading categories...</div>}>
        <CategoryTabs />
      </Suspense>

      <Suspense fallback={<div className="text-game-accent-orange">Loading games...</div>}>
        {filteredGames.length > 0 ? (
          <GameGrid games={filteredGames} />
        ) : (
          <div className="m-5">
            <h1 className="text-center text-3xl text-white">No games found</h1>
          </div>
        )}
      </Suspense>
    </div>
  );
}

export default page;