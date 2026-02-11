import type { OperatorObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Player was deoped
 */
export type MinecraftNotificationOperatorsRemoved = MethodObject<
  'minecraft:notification/operators/removed',
  [{ player : OperatorObject }]
>
