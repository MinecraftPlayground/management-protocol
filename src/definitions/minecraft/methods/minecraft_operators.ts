import type { OperatorObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Get all oped players
 */
export type MinecraftOperators = MethodObjectDefinition<
  'minecraft:operators',
  never[],
  { operators? : OperatorObject[] }
>
