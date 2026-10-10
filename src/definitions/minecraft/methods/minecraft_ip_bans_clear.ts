import type { IpBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Clear all ips in ban list.
 */
export type MinecraftIpBansClear = MethodObjectDefinition<{
  name : 'minecraft:ip_bans/clear',
  params : [],
  result : IpBanObject[]
}>
