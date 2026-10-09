import type { KickPlayerObject, PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Kick players.
 */
export type MinecraftPlayersKick = MethodObjectDefinition<{
  name : 'minecraft:players/kick',
  params : [kick: KickPlayerObject[]],
  result : PlayerObject[]
}>
