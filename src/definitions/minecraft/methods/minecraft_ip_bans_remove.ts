import type { IpBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Remove ip from ban list.
 */
export type MinecraftIpBansRemove = MethodObjectDefinition<{
  name : 'minecraft:ip_bans/remove',
  params : [ip: string[]],
  result : IpBanObject[]
}>
