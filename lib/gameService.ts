import { Game } from '@/types/Game'

const baseUrl = "https://www.freetogame.com/api";
export async function fetchFeaturedGames(): Promise<Game[]> {
  // In a real app, this would be an API call
  const res = await fetch(`${baseUrl}/games`)
  const data = res.json()
  console.log(data);

  return [
    {
      id: 1,
      title: 'Cyber Quest',
      description: 'Futuristic action RPG',
      thumbnail: '/api/placeholder/300/200',
      category: 'Action',
      rating: 4.5,
      playUrl: '/games/cyber-quest'
    },
    {
      id: 2,
      title: 'Brain Blitz',
      description: 'Mind-bending puzzle challenge',
      thumbnail: '/api/placeholder/300/200',
      category: 'Puzzle',
      rating: 4.7,
      playUrl: '/games/brain-blitz'
    }
  ]
}