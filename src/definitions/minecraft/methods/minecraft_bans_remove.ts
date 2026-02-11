import type { PlayerObject, UserBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Remove players from ban list
 */
export type MinecraftBansRemove = MethodObjectDefinition<
  'minecraft:bans/remove',
  [{ remove : PlayerObject[] }],
  { banlist? : UserBanObject[] }
>
