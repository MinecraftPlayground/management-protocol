import type { OperatorObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Set all oped players
 */
export type MinecraftOperatorsSet = MethodObjectDefinition<
  'minecraft:operators/set',
  [{ operators : OperatorObject[] }],
  { operators? : OperatorObject[] }
>
