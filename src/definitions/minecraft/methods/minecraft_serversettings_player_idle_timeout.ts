import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the number of seconds before idle players are automatically kicked from the server.
 */
export type MinecraftServersettingsPlayerIdleTimeout = MethodObjectDefinition<{
  name : 'minecraft:serversettings/player_idle_timeout',
  params : [],
  result : number
}>
