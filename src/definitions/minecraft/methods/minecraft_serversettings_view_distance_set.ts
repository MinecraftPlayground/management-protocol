import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the server's view distance in chunks.
 */
export type MinecraftServersettingsViewDistanceSet = MethodObjectDefinition<{
  name : 'minecraft:serversettings/view_distance/set',
  params : [distance: number],
  result : number
}>
