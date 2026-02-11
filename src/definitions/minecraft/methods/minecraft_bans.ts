import type { UserBanObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Get the ban list
 */
export type MinecraftBans = MethodObject<
  'minecraft:bans',
  never[],
  { banlist? : UserBanObject[] }
>
