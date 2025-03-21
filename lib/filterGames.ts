import { GameInList } from "@/types/Game";

export const filterGames = (games: GameInList[], searchTerm: string): GameInList[] => {
  const term = searchTerm.toLowerCase().trim();
  if (!term) return games;
  
  return games.filter(game => 
    game.title.toLowerCase().includes(term) ||
    game.short_description.toLowerCase().includes(term) ||
    game.genre.toLowerCase().includes(term)
  );
};
