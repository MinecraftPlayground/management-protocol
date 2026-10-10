import type { ServerStateObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get server status.
 */
export type MinecraftServerStatus = MethodObjectDefinition<{
  name : 'minecraft:server/status',
  params : [],
  result : ServerStateObject
}>
