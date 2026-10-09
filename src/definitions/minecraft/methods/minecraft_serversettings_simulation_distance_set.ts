import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the server's simulation distance in chunks.
 */
export type MinecraftServersettingsSimulationDistanceSet = MethodObjectDefinition<{
  name : 'minecraft:serversettings/simulation_distance/set',
  params : [distance: number],
  result : number
}>
