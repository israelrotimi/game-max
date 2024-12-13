import { Suspense } from 'react'
import { fetchFeaturedGames } from '@/lib/gameService'
import GameGrid from '@/components/GameGrid'
import SearchBar from '@/components/SearchBar'
import CategoryTabs from '@/components/CategoryTabs'

export default async function HomePage() {
  const games = await fetchFeaturedGames()

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">GamePortal</h1>
        <SearchBar />
      </header>

      <Suspense fallback={<div>Loading categories...</div>}>
        <CategoryTabs />
      </Suspense>

      <Suspense fallback={<div>Loading games...</div>}>
        <GameGrid games={games} />
      </Suspense>
    </div>
  )
}