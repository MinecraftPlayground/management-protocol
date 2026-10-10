import type { Difficulty } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the difficulty level of the server.
 */
export type MinecraftServersettingsDifficultySet = MethodObjectDefinition<{
  name : 'minecraft:serversettings/difficulty/set',
  params : [difficulty: Difficulty],
  result : Difficulty
}>
