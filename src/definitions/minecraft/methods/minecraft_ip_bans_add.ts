import type { IncomingIpBanObject, IpBanObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Add ip to ban list
 */
export type MinecraftIpBansAdd = MethodObject<
  'minecraft:ip_bans/add',
  [{ add : IncomingIpBanObject[] }],
  { banlist? : IpBanObject[] }
>
