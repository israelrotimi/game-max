'use client'

import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'


export default function SearchBar({ searchVal="" }) {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search/${encodeURIComponent(searchTerm)}`)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }
  const handleChange = (value) => {
    setSearchTerm(value)
  }
  useEffect(() => {
    searchVal && handleChange(searchVal)
  }, [])

  return (
    <div className="relative mb-6">
      <input 
        type="text" 
        placeholder="Search games..." 
        value={searchTerm}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full p-3 pl-10 rounded-lg 
          bg-game-bg-medium text-game-text-primary 
          border-2 border-game-accent-purple 
          focus:ring-2 focus:ring-game-accent-orange 
          focus:outline-none"
      />
      <button onClick={handleSearch}>
        <Search className="absolute right-5 top-3 text-game-accent-purple" />
      </button>
    </div>
  )
}