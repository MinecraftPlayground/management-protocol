import type { IncomingIpBanObject, IpBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Add ip to ban list.
 */
export type MinecraftIpBansAdd = MethodObjectDefinition<{
  name : 'minecraft:ip_bans/add',
  params : [add: IncomingIpBanObject[]],
  result : IpBanObject[]
}>
