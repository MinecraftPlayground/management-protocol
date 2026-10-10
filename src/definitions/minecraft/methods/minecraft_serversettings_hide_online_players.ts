import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get whether the server hides online player information from status queries.
 */
export type MinecraftServersettingsHideOnlinePlayers = MethodObjectDefinition<{
  name : 'minecraft:serversettings/hide_online_players',
  params : [],
  result : boolean
}>
