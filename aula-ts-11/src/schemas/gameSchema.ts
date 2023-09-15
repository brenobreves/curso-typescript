import Joi from "joi";
import { Game, createGame } from "protocols/game-protocol";

const gameSchema = Joi.object<createGame>({
    title:    Joi.string().required(),
    platform: Joi.string().required()
})

export default gameSchema