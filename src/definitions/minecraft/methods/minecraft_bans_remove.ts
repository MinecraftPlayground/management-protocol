import type { PlayerObject, UserBanObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Remove players from ban list
 */
export type MinecraftBansRemove = MethodObject<
  'minecraft:bans/remove',
  [{ remove : PlayerObject[] }],
  { banlist? : UserBanObject[] }
>
