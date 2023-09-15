import gamesRepository from "../repository/games-repository";
import { Game, createGame } from "./../protocols/game-protocol";

async function getGames(): Promise<Game[]> {
  return await gamesRepository.getGames();
}

async function createGame(game: createGame): Promise<void> {
  if (await gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }

  await gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: createGame): Promise<boolean> {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);
  console.log(result)
  return result !== 0 ? true : false;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;