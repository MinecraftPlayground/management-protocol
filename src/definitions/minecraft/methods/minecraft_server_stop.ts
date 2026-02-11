import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Stop server
 */
export type MinecraftServerStop = MethodObjectDefinition<
  'minecraft:server/stop',
  never[],
  { stopping? : boolean }
>
