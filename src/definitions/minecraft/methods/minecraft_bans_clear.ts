import type { UserBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Clear all players in ban list.
 */
export type MinecraftBansClear = MethodObjectDefinition<{
  name : 'minecraft:bans/clear',
  params : [],
  result : UserBanObject[]
}>
