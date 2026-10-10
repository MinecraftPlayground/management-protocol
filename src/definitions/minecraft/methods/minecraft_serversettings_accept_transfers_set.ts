import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Enable or disable accepting player transfers from other servers.
 */
export type MinecraftServersettingsAcceptTransfersSet = MethodObjectDefinition<{
  name : 'minecraft:serversettings/accept_transfers/set',
  params : [accept: boolean],
  result : boolean
}>
