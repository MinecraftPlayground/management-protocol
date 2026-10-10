import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the entity broadcast range as a percentage.
 */
export type MinecraftServersettingsEntityBroadcastRangeSet = MethodObjectDefinition<{
  name : 'minecraft:serversettings/entity_broadcast_range/set',
  params : [percentagePoints: number],
  result : number
}>
