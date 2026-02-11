import type { OperatorObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Deop all players
 */
export type MinecraftOperatorsClear = MethodObjectDefinition<
  'minecraft:operators/clear',
  never[],
  { operators? : OperatorObject[] }
>
