import type { IpBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the ip banlist.
 */
export type MinecraftIpBansSet = MethodObjectDefinition<{
  name : 'minecraft:ip_bans/set',
  params : [banlist: IpBanObject[]],
  result : IpBanObject[]
}>
