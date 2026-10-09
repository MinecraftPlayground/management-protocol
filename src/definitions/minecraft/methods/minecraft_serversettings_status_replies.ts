import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get whether the server responds to connection status requests.
 */
export type MinecraftServersettingsStatusReplies = MethodObjectDefinition<{
  name : 'minecraft:serversettings/status_replies',
  params : [],
  result : boolean
}>
