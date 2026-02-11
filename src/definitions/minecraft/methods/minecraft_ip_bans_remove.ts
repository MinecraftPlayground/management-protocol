import type { IpBanObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Remove ip from ban list
 */
export type MinecraftIpBansRemove = MethodObject<
  'minecraft:ip_bans/remove',
  [{ ip : string[] }],
  { banlist? : IpBanObject[] }
>
