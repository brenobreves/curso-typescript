import { Game, createGame } from "../protocols/game-protocol";
import { db } from "../database/database.connetcion";

async function getGames() {
  const query = await db.query<Game>(`
    SELECT * FROM games
  `)
  return query.rows;
}

async function createGame(game: createGame) {
  console.log("Criando o jogo:", game)
  return await db.query<createGame>(`
    INSERT INTO games (title,platform) VALUES ($1,$2)
  `,[game.title,game.platform])
}

async function getGameByTitleAndPlatform(game: createGame) {
  const query = await db.query<Game>(`
    SELECT * FROM games WHERE title=$1 AND platform=$2  
  `,[game.title,game.platform])
  return query.rowCount
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;