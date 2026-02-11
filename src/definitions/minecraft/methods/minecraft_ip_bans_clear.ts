import type { IpBanObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Clear all ips in ban list
 */
export type MinecraftIpBansClear = MethodObject<
  'minecraft:ip_bans/clear',
  never[],
  { banlist? : IpBanObject[] }
>
