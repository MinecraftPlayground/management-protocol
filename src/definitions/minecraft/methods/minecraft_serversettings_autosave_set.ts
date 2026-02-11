import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Enable or disable automatic world saving on the server
 */
export type MinecraftServersettingsAutosaveSet = MethodObjectDefinition<
  'minecraft:serversettings/autosave/set',
  [{ enable : boolean }],
  { enabled? : boolean }
>
