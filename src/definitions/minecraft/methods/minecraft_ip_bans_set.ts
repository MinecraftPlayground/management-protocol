import type { IpBanObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Set the ip banlist
 */
export type MinecraftIpBansSet = MethodObject<
  'minecraft:ip_bans/set',
  [{ banlist : IpBanObject[] }],
  { banlist? : IpBanObject[] }
>
