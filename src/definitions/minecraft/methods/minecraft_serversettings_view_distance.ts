import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Get the server's view distance in chunks
 */
export type MinecraftServersettingsViewDistance = MethodObjectDefinition<
  'minecraft:serversettings/view_distance',
  never[],
  { distance? : number }
>
