import type { PlayerObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Player was added to allowlist
 */
export type MinecraftNotificationAllowlistAdded = MethodObject<
  'minecraft:notification/allowlist/added',
  [{ player : PlayerObject }]
>
