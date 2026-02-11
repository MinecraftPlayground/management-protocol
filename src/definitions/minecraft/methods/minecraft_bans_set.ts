import type { UserBanObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Set the banlist
 */
export type MinecraftBansSet = MethodObject<
  'minecraft:bans/set',
  [{ bans : UserBanObject[] }],
  { banlist? : UserBanObject[] }
>
