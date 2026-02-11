import type { OperatorObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Deop all players
 */
export type MinecraftOperatorsClear = MethodObject<
  'minecraft:operators/clear',
  never[],
  { operators? : OperatorObject[] }
>
