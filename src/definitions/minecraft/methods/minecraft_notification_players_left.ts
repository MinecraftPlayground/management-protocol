import type { PlayerObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Player left
 */
export type MinecraftNotificationPlayersLeft = MethodObject<
  'minecraft:notification/players/left',
  [{ player : PlayerObject }]
>
