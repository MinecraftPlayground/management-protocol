import type { PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Add players to allowlist.
 */
export type MinecraftAllowlistAdd = MethodObjectDefinition<{
  name : 'minecraft:allowlist/add',
  params : [add: PlayerObject[]],
  result : PlayerObject[]
}>
