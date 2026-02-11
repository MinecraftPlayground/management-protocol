import type { TypedGameRuleObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Gamerule was changed
 */
export type MinecraftNotificationGamerulesUpdated = MethodObject<
  'minecraft:notification/gamerules/updated',
  [{ gamerule : TypedGameRuleObject }]
>
