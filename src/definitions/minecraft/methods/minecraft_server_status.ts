import type { ServerStateObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Get server status
 */
export type MinecraftServerStatus = MethodObjectDefinition<
  'minecraft:server/status',
  never[],
  { status? : ServerStateObject }
>
