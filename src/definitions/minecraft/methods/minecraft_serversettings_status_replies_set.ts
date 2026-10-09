import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Enable or disable the server responding to connection status requests.
 */
export type MinecraftServersettingsStatusRepliesSet = MethodObjectDefinition<{
  name : 'minecraft:serversettings/status_replies/set',
  params : [enable: boolean],
  result : boolean
}>
