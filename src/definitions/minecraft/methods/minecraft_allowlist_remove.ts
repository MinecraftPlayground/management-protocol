import type { PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Remove players from allowlist.
 */
export type MinecraftAllowlistRemove = MethodObjectDefinition<{
  name : 'minecraft:allowlist/remove',
  params : [remove: PlayerObject[]],
  result : PlayerObject[]
}>
