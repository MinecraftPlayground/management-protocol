import type { KickPlayerObject, PlayerObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Kick players
 */
export type MinecraftPlayersKick = MethodObject<
  'minecraft:players/kick',
  [{ kick : KickPlayerObject[] }],
  { kicked? : PlayerObject[] }
>
