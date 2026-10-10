import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Stop server.
 */
export type MinecraftServerStop = MethodObjectDefinition<{
  name : 'minecraft:server/stop',
  params : [],
  result : boolean
}>
