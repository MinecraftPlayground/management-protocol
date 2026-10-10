import type { UserBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the banlist.
 */
export type MinecraftBansSet = MethodObjectDefinition<{
  name : 'minecraft:bans/set',
  params : [bans: UserBanObject[]],
  result : UserBanObject[]
}>
