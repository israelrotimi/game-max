//import { Game } from '@/types/Game'

const baseUrl = "https://www.freetogame.com/api";

export async function fetchFeaturedGames() {
  try {
    const res = await fetch(`${baseUrl}/games?platform=browser&sort-by=alphabetical`)
    const games = await res.json()
    return games;
  } catch (error) {
    console.log("failed to fetch")
  }
}
export async function fetchGamesByCategory(category:string="shooter") {
  try {
    const res = await fetch(`${baseUrl}/games?platform=browser&sort-by=alphabetical?category=${category}`)
    const games = res.json()
    console.log(games)
    return games;
  } catch (error) {
    console.log("failed to fetch")
  }
}
// developer
// : 
// "Archive Entertainment "
// freetogame_profile_url
// : 
// "https://www.freetogame.com/8bitmmo"
// game_url
// : 
// "https://www.freetogame.com/open/8bitmmo"
// genre
// : 
// "MMORPG"
// id
// : 
// 181
// platform
// : 
// "PC (Windows), Web Browser"
// publisher
// : 
// "Archive Entertainment "
// release_date
// : 
// "2015-01-26"
// short_description
// : 
// "A free to play retro­-style 2D MMO and a giant construction sandbox! "
// thumbnail
// : 
// "https://www.freetogame.com/g/181/thumbnail.jpg"
// title
// : 
// "8BitMMO"