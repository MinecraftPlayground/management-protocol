import type { PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the allowlist.
 */
export type MinecraftAllowlistSet = MethodObjectDefinition<{
  name : 'minecraft:allowlist/set',
  params : [players: PlayerObject[]],
  result : PlayerObject[]
}>
