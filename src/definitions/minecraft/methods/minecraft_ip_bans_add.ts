import type { IncomingIpBanObject, IpBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Add ip to ban list
 */
export type MinecraftIpBansAdd = MethodObjectDefinition<
  'minecraft:ip_bans/add',
  [{ add : IncomingIpBanObject[] }],
  { banlist? : IpBanObject[] }
>
