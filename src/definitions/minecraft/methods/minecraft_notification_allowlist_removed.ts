import type { PlayerObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Player was removed from allowlist
 */
export type MinecraftNotificationAllowlistRemoved = MethodObject<
  'minecraft:notification/allowlist/removed',
  [{ player : PlayerObject }]
>
