'use client'

import { useState } from 'react'
import { Search} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      router.push(`/search/${encodeURIComponent(searchTerm)}`);
    }
  }
  const handleSearchClick = (e: React.MouseEvent) => {
    if (searchTerm.trim() === "") {
      e.preventDefault();
    }
  }
  return (
    <div className="relative mb-6">
      <input 
        type="text" 
        placeholder="Search games..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full p-3 pl-10 rounded-lg 
          bg-game-bg-medium text-game-text-primary 
          border-2 border-game-accent-purple 
          focus:ring-2 focus:ring-game-accent-orange 
          focus:outline-none"
      />
      <Link href={`/search/${encodeURIComponent(searchTerm)}`} onClick={handleSearchClick}>
      <Search className="absolute right-5 top-3 text-game-accent-purple" />
      </Link>
    </div>
  )
}
