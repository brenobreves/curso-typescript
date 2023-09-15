export type Game = {
  id: number;
  title: string;
  platform: string;
}

export type createGame = Omit<Game, "id">