import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the server's message of the day displayed to players.
 */
export type MinecraftServersettingsMotd = MethodObjectDefinition<{
  name : 'minecraft:serversettings/motd',
  params : [],
  result : string
}>
