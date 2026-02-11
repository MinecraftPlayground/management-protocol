import type { IpBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Set the ip banlist
 */
export type MinecraftIpBansSet = MethodObjectDefinition<
  'minecraft:ip_bans/set',
  [{ banlist : IpBanObject[] }],
  { banlist? : IpBanObject[] }
>
