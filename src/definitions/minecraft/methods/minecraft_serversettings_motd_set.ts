import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the server's message of the day displayed to players.
 */
export type MinecraftServersettingsMotdSet = MethodObjectDefinition<{
  name : 'minecraft:serversettings/motd/set',
  params : [message: string],
  result : string
}>
