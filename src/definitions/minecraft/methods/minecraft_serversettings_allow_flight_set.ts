import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Allow or disallow flight for players in Survival mode.
 */
export type MinecraftServersettingsAllowFlightSet = MethodObjectDefinition<{
  name : 'minecraft:serversettings/allow_flight/set',
  params : [allow: boolean],
  result : boolean
}>
