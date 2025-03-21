'use client'

import Link from 'next/link';
import { useEffect, useState,  } from 'react'

const gameCategories = [
  'featured', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 'open-world', 'survival'
]

export default function CategoryTabs({ active}) {
  const [activeCategory, setActiveCategory] = useState('featured')
  useEffect(()=> {
    setActiveCategory(active)
  }, [active])

  return (
    <div className="flex overflow-x-auto space-x-4 mb-6 pb-2">
      {gameCategories.map((category, i) => (
        <Link key={i} href={category === 'featured' ? '/' : `/categories/${category}`}>
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              //changeCategoryInUI(category)
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium 
              ${activeCategory === category 
                ? 'bg-game-accent-orange text-black' 
                : 'bg-game-bg-medium text-game-accent-purple hover:bg-game-accent-purple hover:text-white'}`}
          >
            {category}
          </button>
        </Link>
      ))}
    </div>
  )
}
