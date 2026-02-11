import type { OperatorObject, PlayerObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Deop players
 */
export type MinecraftOperatorsRemove = MethodObject<
  'minecraft:operators/remove',
  [{ remove : PlayerObject[] }],
  { operators? : OperatorObject[] }
>
