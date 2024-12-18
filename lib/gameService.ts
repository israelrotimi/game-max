import { GameInList } from "@/types/Game";

const baseUrl = "https://www.freetogame.com/api";

export async function fetchFeaturedGames() : Promise<GameInList[] | null>{
  try {
    const res = await fetch(`${baseUrl}/games?platform=browser&sort-by=alphabetical`)
    const games = await res.json()
    return games;
  } catch (error) {
    console.error("failed to fetch")
    return null;
  }
}
export async function fetchGamesByCategory(category: string) : Promise<GameInList[] | null>{
  try {
    const res = await fetch(`${baseUrl}/games?platform=browser&sort-by=alphabetical?category=${category}`)
    const games = res.json()
    return games;
  } catch (error) {
    console.error("failed to fetch")
    return null;
  }
}
// This feature implementation is a pain in the ass. 
// I think I will just leave it like this
export async function fetchGamesWithSearch(
  searchTerm: string,
  games: Promise<GameInList[] | null> = fetchFeaturedGames()
): Promise<GameInList[] | null> {
  try {
    const gamesList = await games;
    if (!gamesList) return null;
    const normalizedSearchTerm = searchTerm.toLowerCase();
    const filteredGames = gamesList.filter((game) =>
      [game.genre, game.platform, game.short_description, game.title].some((field) =>
        field.toLowerCase().includes(normalizedSearchTerm)
      )
        );
      return filteredGames
  } catch (error) {
    console.error("failed to fetch: ", error)
    return null
  }
}




