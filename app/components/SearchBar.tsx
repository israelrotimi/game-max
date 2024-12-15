'use client'

import { useState } from 'react'
import { Search, Filter } from 'lucide-react'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="relative mb-6">
      <input 
        type="text" 
        placeholder="Search games..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 pl-10 rounded-lg 
          bg-game-bg-medium text-game-text-primary 
          border-2 border-game-accent-purple 
          focus:ring-2 focus:ring-game-accent-orange 
          focus:outline-none"
      />
      <Search className="absolute left-3 top-3 text-game-accent-purple" />
      <Filter className="absolute right-3 top-3 text-game-accent-purple" />
    </div>
  )
}