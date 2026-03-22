import type { PlayerObject, UserBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Remove players from ban list.
 */
export type MinecraftBansRemove = MethodObjectDefinition<
  'minecraft:bans/remove',
  [PlayerObject[]],
  /** banlist */
  UserBanObject[]
>
