import type { PlayerObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Player was removed from ban list
 */
export type MinecraftNotificationBansRemoved = MethodObject<
  'minecraft:notification/bans/removed',
  [{ player : PlayerObject }]
>
