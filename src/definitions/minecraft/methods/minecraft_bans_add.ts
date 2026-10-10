import type { UserBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Add players to ban list.
 */
export type MinecraftBansAdd = MethodObjectDefinition<{
  name : 'minecraft:bans/add',
  params : [add: UserBanObject[]],
  result : UserBanObject[]
}>
