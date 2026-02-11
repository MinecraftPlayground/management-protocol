import type { PlayerObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Player joined
 */
export type MinecraftNotificationPlayersJoined = MethodObject<
  'minecraft:notification/players/joined',
  [{ player : PlayerObject }]
>
