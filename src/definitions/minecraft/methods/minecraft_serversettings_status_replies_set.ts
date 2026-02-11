import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Enable or disable the server responding to connection status requests
 */
export type MinecraftServersettingsStatusRepliesSet = MethodObjectDefinition<
  'minecraft:serversettings/status_replies/set',
  [{ enable : boolean }],
  { enabled? : boolean }
>
