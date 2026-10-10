import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get whether the server accepts player transfers from other servers.
 */
export type MinecraftServersettingsAcceptTransfers = MethodObjectDefinition<{
  name : 'minecraft:serversettings/accept_transfers',
  params : [],
  result : boolean
}>
