import type { UserBanObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Clear all players in ban list
 */
export type MinecraftBansClear = MethodObject<
  'minecraft:bans/clear',
  never[],
  { banlist? : UserBanObject[] }
>
