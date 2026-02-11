import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Save server state
 */
export type MinecraftServerSave = MethodObjectDefinition<
  'minecraft:server/save',
  [{ flush : boolean }],
  { saving? : boolean }
>
