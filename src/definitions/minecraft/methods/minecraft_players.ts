import type { PlayerObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Get all connected players
 */
export type MinecraftPlayers = MethodObject<
  'minecraft:players',
  never[],
  { players? : PlayerObject[] }
>
