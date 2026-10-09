import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get whether flight is allowed for players in Survival mode.
 */
export type MinecraftServersettingsAllowFlight = MethodObjectDefinition<{
  name : 'minecraft:serversettings/allow_flight',
  params : [],
  result : boolean
}>
