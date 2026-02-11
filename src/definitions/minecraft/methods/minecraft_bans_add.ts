import type { UserBanObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Add players to ban list
 */
export type MinecraftBansAdd = MethodObject<
  'minecraft:bans/add',
  [{ add : UserBanObject[] }],
  { banlist? : UserBanObject[] }
>
