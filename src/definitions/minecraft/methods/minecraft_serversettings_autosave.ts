import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Get whether automatic world saving is enabled on the server
 */
export type MinecraftServersettingsAutosave = MethodObjectDefinition<
  'minecraft:serversettings/autosave',
  never[],
  { enabled? : boolean }
>
