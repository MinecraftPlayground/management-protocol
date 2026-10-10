import type { PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get all connected players.
 */
export type MinecraftPlayers = MethodObjectDefinition<{
  name : 'minecraft:players',
  params : [],
  result : PlayerObject[]
}>
