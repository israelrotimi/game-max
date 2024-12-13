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
        className="w-full p-3 pl-10 rounded-lg border-2 border-gray-300 focus:border-blue-500"
      />
      <Search className="absolute left-3 top-3 text-gray-400" />
      <Filter className="absolute right-3 top-3 text-gray-400" />
    </div>
  )
}