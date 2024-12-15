'use client'

import { useState } from 'react'

const gameCategories = [
  'Featured', 'Action', 'Puzzle', 'Strategy', 
  'Multiplayer', 'Arcade', 'Educational'
]

export default function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState('Featured')

  return (
    <div className="flex overflow-x-auto space-x-4 mb-6 pb-2">
      {gameCategories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium 
            ${activeCategory === category 
              ? 'bg-game-accent-orange text-black' 
              : 'bg-game-bg-medium text-game-accent-purple hover:bg-game-accent-purple hover:text-white'}`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}