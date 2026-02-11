import type { OperatorObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Op players
 */
export type MinecraftOperatorsAdd = MethodObject<
  'minecraft:operators/add',
  [{ add : OperatorObject[] }],
  { operators? : OperatorObject[] }
>
