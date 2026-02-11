import type { IpBanObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Get the ip ban list
 */
export type MinecraftIpBans = MethodObject<
  'minecraft:ip_bans',
  never[],
  { banlist? : IpBanObject[] }
>
